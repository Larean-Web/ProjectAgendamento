import { Request, Response } from "express";
import prisma from "../../prisma";

const ShowCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await prisma.cliente.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: "Cliente nao encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default ShowCliente;
