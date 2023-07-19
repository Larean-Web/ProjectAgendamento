import express from "express";
import cors from "cors";
import router from "./routes";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.set('trust proxy', true);

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log("Servidor rodando na porta:" + port);
});
