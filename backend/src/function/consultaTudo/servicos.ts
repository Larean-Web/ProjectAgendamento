import { Request, Response } from "express";
import prisma from "../../prisma";

const MostrarServicos = async (req: Request, res: Response) => {
  try {
    const dados = await prisma.servico.findMany({});
    console.log(dados);
    return res.status(200).json({ dados });
  } catch (error) {
    return res.status(400).json({ error: "dados nao encontrados" });
  }
};

export default MostrarServicos;
