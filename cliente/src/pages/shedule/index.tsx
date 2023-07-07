import { Outlet } from "react-router-dom"
import Header from "../../components/header"

function Shedule(){
    return(
        <div className="h-full w-full">
            <Header/>
            <Outlet/>
        </div>
    )
}
export default Shedule