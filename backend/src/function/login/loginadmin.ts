import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma";

const loginadmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const usuario = await prisma.administrador.findUnique({
      where: {
        email,
      },
    });
    const { id, nome } = usuario;

    if (!usuario) {
      return res.status(400).json({ message: "Usuario nao encontrado" });
    }

    const senhaigual = await bcrypt.compare(password, usuario.password);

    if (!senhaigual) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
    const tokenexp = {
      expiresIn: "15d",
    };

    const token = jwt.sign({ userId: usuario.id }, "Lucas102030@", tokenexp);

    return res.status(200).json({ email, nome, token  });
  } catch (error) {
    return res.status(400);
  }
};

export default loginadmin;
