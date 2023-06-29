import { Request, Response } from "express";
import prisma from "../../prisma";

const MostrarCompromissos = (req: Request, res: Response) => {
  try {
    const dados = prisma.compromisso.findMany({});
    console.log(dados);
    return res.status(200).json(dados);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default MostrarCompromissos;
