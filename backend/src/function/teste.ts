import { Request, Response } from "express";

const teste = async (req: Request, res: Response) => {
  const teste1 = "deu certo  o teste";

  try {
    console.log(teste1);

    return res.status(200).json({ message: "teste kkk" });
  } catch (error) {}
};

export default teste;
