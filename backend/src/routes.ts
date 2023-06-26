import express from "express";
import teste from "./function/teste";
import RegistrarHorario from "./function/RegistrarHorario";


const router = express.Router();

router.get('/teste', teste)
router.post('/marcahorario/:id', RegistrarHorario )
// 123
export default router;
