import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando port: ${process.env.PORT}`);
});
