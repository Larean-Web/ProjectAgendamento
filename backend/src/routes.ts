import express from "express";
import teste from './function/teste'

const router = express.Router();

// rotas a baixo

router.post('/teste', teste)

// rotas acima

export default router;
