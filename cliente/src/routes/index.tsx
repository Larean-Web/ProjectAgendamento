import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shedule from "../pages/shedule";
import Sheduling from "../pages/sheduling";
import Calendar from "../components/calendar";

function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shedule />}>
                    <Route path="/" element={<Sheduling/>}>
                        <Route path="/:id" element={<Calendar/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default RouteApp;
