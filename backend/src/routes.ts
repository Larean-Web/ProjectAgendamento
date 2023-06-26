import express from "express";
import teste from "./function/teste";

const router = express.Router();

router.get('/teste', teste)
// 123
export default router;
