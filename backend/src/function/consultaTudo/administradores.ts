import { Request, Response } from "express";
import prisma from "../../prisma";

const MostrarAdmin = async (req: Request, res: Response) => {
  try {
    const dados = await prisma.administrador.findMany({});
    console.log(dados);
    return res.status(200).json(dados);
  } catch (error) {
    res.status(400).json({ message: "Dados não encontrados" });
  }
};

export default MostrarAdmin;
