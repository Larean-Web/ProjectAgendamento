import { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const senha = "Lucas102030@";

    if (!token) {
      return res.status(400).json({ message: "Token faltando" });
    }

    if (token === senha) {
      return next();
    }

    return res.status(401).json({ message: "Token inválido" });
  } catch (error) {
    // Passe o erro para o próximo middleware de tratamento de erros
    return next(error);
  }
};

export default auth;
