import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(cors());

app.use(express.json());
//teste
app.use(router);

app.listen(3000, () => {
  console.log("listening 3000");
});
