import { BrowserRouter, Route, Routes} from "react-router-dom";
import SigIn from "../pages/signIn";
import SigUp from "../pages/signUp";
import NewPassword from "../pages/newPassword";
import RedefinePassword from "../pages/redefinePassword";


import Schedule from "../pages/schedule";
import Scheduling from "../pages/scheduling";
import PrivateRoutes from "./auth"
import Calendar from "../components/calendar"
import Services from "../pages/services"
import Client from "../pages/client";


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
                        <PrivateRoutes>
                            <Schedule />
                        </PrivateRoutes>
                    }
                >       
                    <Route path="/agenda" element={<Scheduling />} >
                        <Route path="calendar/:id" element={<Calendar/>}/>
                    </Route>
                    <Route path="/agenda/servicos" element={<Services />}/>
                    <Route path="/agenda/cliente" element={<Client/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default RouterApp;

