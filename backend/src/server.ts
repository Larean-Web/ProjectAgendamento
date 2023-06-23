import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
// teste
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log("listening 3000");
});
