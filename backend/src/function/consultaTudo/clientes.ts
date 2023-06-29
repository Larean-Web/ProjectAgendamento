import { Request, Response } from "express";
import prisma from "../../prisma";

const clienteShow = async (req: Request, res: Response) => {
  try {
    const dados = await prisma.cliente.findMany({});
    return res.status(200).json(dados);
  } catch (error) {
    res.status(404).send(error);
  }
};

export default clienteShow;
