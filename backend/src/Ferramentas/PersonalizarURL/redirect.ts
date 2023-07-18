import { Request, Response } from "express";
import prisma from "../../prisma";
import dotenv from "dotenv";

dotenv.config();

const redirect = async (req: Request, res: Response) => {
  try {
    const { redirect } = req.params;

    const link = await prisma.linksurl.findUnique({
      where: {
        urlEncurtada: redirect,
      },
    });

    if (!link) {
      return res.status(404).json({ error: "Link nao encontrado" });
    }

    return res.redirect(link.urlOriginal);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default redirect;
