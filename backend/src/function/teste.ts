import { Request, Response } from "express";


const teste = async (req: Request, res: Response) => {
  try {
    console.log(req.method)
    return res.status(200).json({ message: "teste deu certo" });
    
  } catch (error) {
    return res.status(400).json({ message: "teste deu erro" });
  }
};

export default teste;