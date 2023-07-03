import { BrowserRouter, Route, Routes} from "react-router-dom";
import SigIn from "../pages/login";
import SigUp from "../pages/registro";
import NewPassword from "../pages/novaSenha";
import RedefinePassword from "../pages/redefinirSenha";


import Home from "../pages/home";
import Agenda from "../pages/agenda";
import Agendamento from "../pages/agendamento";
import RotasPrivadas from "./auth"

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SigIn />} />
                <Route path="/registro" element={<SigUp />} />
                <Route path="/novasenha" element={<NewPassword />} />
                <Route path="/redefinirsenha" element={<RedefinePassword />} />
                <Route
                    path="/agenda"
                    element={
                        <RotasPrivadas>
                            <Agenda />
                        </RotasPrivadas>
                    }
                >
                    <Route path="" element={<Home />} />
                    <Route path="/agenda/agendamentos" element={<Agendamento />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default RouterApp;

