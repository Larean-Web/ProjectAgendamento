import { Request, Response } from "express";

const RegistrarHorario = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const { nome, sobrenome, datanascimento } = req.body;



    res.status(200).send({ nome, params });
  } catch (error) {
    console.error("Erro durante o login:", error);
    return res.status(500).json({ message: "Erro durante o cadastro" });
  }
};

export default RegistrarHorario;
