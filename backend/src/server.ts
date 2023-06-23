import express, { Router } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(Router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando port: ${process.env.PORT}`);
});
