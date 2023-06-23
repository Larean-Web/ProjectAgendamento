import { Request, Response } from "express";

const teste = (req: Request, res: Response) => {
  try {
    const teste1 = "deu certo  o teste";
  
    return res.status(200).json(teste1);
  } catch (error) {
    
  }
};

export default teste;
