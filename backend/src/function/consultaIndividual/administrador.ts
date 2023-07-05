import { Request, Response } from "express";
import prisma from "../../prisma";

const ShowAdministrador = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const dados = await prisma.administrador.findUnique({
      where: {
        id: id,
      },
    });

    const { nome, contato, email } = dados;

    if (dados) {
      return res
        .status(200)
        .json({ nome: nome, contato: contato, email: email });
    } else {
      return res.status(404).json({ messagem: "Usuario não existe!" });
    }
  } catch (error) {
    return res.status(404).json({ error: "Está faltando o ID" });
  }
};

export default ShowAdministrador;
