import { Request, Response } from "express";

const RegistrarHorario = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { nome, sobrenome, datanascimento } = req.body;
    console.log(id);

    res.status(200).send({ nome, id });
  } catch (error) {
    console.error("Erro durante o login:", error);
    return res.status(500).json({ message: "Erro durante o cadastro" });
  }
};

export default RegistrarHorario;
