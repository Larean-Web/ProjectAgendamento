import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./routes";
import fs from 'fs';
import dotenv from "dotenv";


dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.set("trust proxy", true);

app.use(express.json());

app.use(router);

app.use((req: Request, res: Response, next: NextFunction) => {
  const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
  fs.appendFile("logs.txt", logMessage, (err) => {
    if (err) {
      console.error("Erro ao escrever o log:", err);
    }
  });
  next();
});

app.listen(port, () => {
  console.log("Servidor rodando na porta:" + port);
});
