import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const tokenValido = process.env.PASSWORDTOKEN || "Lucas102030@";

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("Token não fornecido");
    }
    const decoded = jwt.verify(token, tokenValido);
    console.log(decoded);
    next();
  } catch (error) {
    // Passe o erro para o próximo middleware de tratamento de erros
    return next(error);
  }
};

export default auth;
