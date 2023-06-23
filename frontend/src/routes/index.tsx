import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NavBar from "../components/navbar";
function RouterApp() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp
