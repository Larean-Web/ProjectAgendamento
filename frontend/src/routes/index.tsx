import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigIn from "../pages/signin";
import SigUp from "../pages/signup";
import NewPassword from "../pages/newpasswordscrenn";
import RedefinePassword from "../pages/redefinepasswordscreen";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/register" element={<SigUp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/redefinepassword" element={<RedefinePassword/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp
