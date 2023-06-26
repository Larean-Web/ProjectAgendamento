import { Request, Response } from "express";

const teste = async (req: Request, res: Response) => {
  try {
    console.log(req.method, req.url);
    return res.status(200).json({ message: "Api funcionando Perfeitamente" });
  } catch (error) {
    return res.status(400).json({ message: "teste deu erro" });
  }
};

export default teste;
