import express from "express";
import teste from "./function/teste";

const router = express.Router();

// rotas a baixo

router.get("/teste", teste);

// rotas acima

export default router;
