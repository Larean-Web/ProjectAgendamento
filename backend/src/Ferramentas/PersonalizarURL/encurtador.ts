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

    if (body) {
      const consulta = await prisma.linksurl.findUnique({
        where: {
          id: body.idusuario,
        },
      });
      console.log(consulta);
      if (consulta) {
        return res.status(200).json({
          message: "Ja existia no Banco de dados",
          Url: consulta.urlOriginal,
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
        return res
          .status(200)
          .json({ message: "Link Cadastrado", codigo: cadastrar.urlEncurtada });
      }
    }

    if (!body) {
      return res.status(400).json({ message: "faltando Parametros" });
    }

    console.log(body);
    console.log(chavealeatoria);

    return res.json(body);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default encurtarlink;
