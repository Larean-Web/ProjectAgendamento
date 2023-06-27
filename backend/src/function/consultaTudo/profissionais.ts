import { Request, Response } from "express";
import prisma from "../../prisma";

const MostrarProfissionais = async (req: Request, res: Response) => {
  try {
    const dados = await prisma.profissional.findMany({});
    console.log(dados);
    return res.status(200).json({ dados });
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default MostrarProfissionais;
