import express from "express";
import teste from "./function/teste";
import RegistrarHorarios from "./function/RegistrarHorarios";
import MostrarClientes from "./function/consultaTudo/clientes";
import MostrarServicos from "./function/consultaTudo/servicos";
import MostrarProfissionais from "./function/consultaTudo/profissionais";
import clienteShow from "./function/consultaTudo/clientes";
import MostrarCompromissos from "./function/consultaTudo/compromissos";
import MostrarAdmin from "./function/consultaTudo/administradores";
import ShowCliente from "./function/consultaIndividual/cliente";
import ShowAdministrador from "./function/consultaIndividual/administrador";
import auth from "./function/auth/auth";
import CreateUsersAdmin from "./function/cadastros/cadastrosADM";
import loginadmin from "./function/login/loginadmin";

const router = express.Router();

router.get("/teste", teste);
router.post("/cadastrar/createuseradmin", CreateUsersAdmin);
router.post("/cadastrar/loginadmin", loginadmin)

router.use(auth);
// rotas privadas

router.post("/marcahorario/:id", RegistrarHorarios);

router.post("/consulta/clientes", MostrarClientes);
router.post("/consulta/servico", MostrarServicos);
router.post("/consulta/profissionais", MostrarProfissionais);
router.post("/consulta/clientes/show", clienteShow);
router.post("/consulta/compromissos", MostrarCompromissos);
router.post("/consulta/administradores", MostrarAdmin);

router.post("/consulta/clientes/:id", ShowCliente);
router.get("/consulta/administrador/:id", ShowAdministrador);

export default router;
