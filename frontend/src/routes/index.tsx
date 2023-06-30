import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigIn from "../pages/login";
import SigUp from "../pages/registro";
import NewPassword from "../pages/novaSenha";
import RedefinePassword from "../pages/redefinirSenha";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/registro" element={<SigUp />} />
        <Route path="/novasenha" element={<NewPassword />} />
        <Route path="/redefinirsenha" element={<RedefinePassword/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp
