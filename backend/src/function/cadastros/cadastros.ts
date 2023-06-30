import prisma from "../../prisma";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

interface DadosRequest {
  nome: string;
  contato: string;
  email: string;
  password: string;
}

const CreateUsersAdmin = async (req: Request, res: Response) => {
  try {
    const { nome, contato, email, password } = req.body;
    const emailExiste = await prisma.administrador.findUnique({
      where: {
        email,
      },
    });
    if (emailExiste) {
      return res
        .status(200)
        .json({ Message: "Esse email já está cadastrado em nosso sistema" });
    } else {
      const cadastrar = await prisma.administrador.create({
        data: {
          nome: nome,
          contato: contato,
          email: email,
          password: await bcrypt.hash(password, 10),
        },
      });
      console.log(cadastrar);

      return res.status(200).json({
        nome: nome,
        email: email,
        contato: contato,
        message: "Cadastrado com sucesso",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default CreateUsersAdmin;
