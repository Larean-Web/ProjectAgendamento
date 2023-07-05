import { Outlet } from "react-router-dom"
import Header from "../../components/header"


function Schedule(){
    const routes: string[] = ["/agenda", "/agenda/servicos", "/agenda/cliente"]
    return(
        <div className="h-full w-full">   
           <Header routes={routes}/>
           <Outlet/>
        </div>
    )
}
export default Schedule