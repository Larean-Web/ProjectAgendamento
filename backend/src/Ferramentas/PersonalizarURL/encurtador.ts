import { Request, Response } from "express";
import prisma from "../../prisma";
import { gerarchaveapi } from "../../services/gerarchaveapi";
import gerarChave from "./gerarchave";
import dotenv from "dotenv";

dotenv.config();

const urlapi = process.env.REDIRECTAPI || "https://localhost:3001";

const encurtarlink = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const chavealeatoria = gerarChave(10);
    const urlcurta = chavealeatoria;

    if (!body.idusuario) {
      return res.status(400).json({
        mensagem: "idusuario não informado",
      });
    }

    if (body) {
      const consulta = await prisma.linksurl.findUnique({
        where: {
          id: body.idusuario,
        },
      });

      if (consulta) {
        return res.status(200).json({
          message: "Ja existia no Banco de dados",
          UrlOriginal: consulta.urlOriginal,
          codigo: consulta.urlEncurtada,
        });
      }

      if (!consulta) {
        const cadastrar = await prisma.linksurl.create({
          data: {
            id: body.idusuario,
            urlEncurtada: urlcurta,
            urlOriginal: body.urlOriginal,
            clienteId: body.idusuario,
          },
        });
        return res.status(200).json({
          message: "Link Cadastrado",
          codigo: cadastrar.urlEncurtada,
          urlOriginal: cadastrar.urlOriginal,
        });
      }
    }
  } catch (error) {
    return res.status(404).send({message: error.message});
  }
};

export default encurtarlink;
