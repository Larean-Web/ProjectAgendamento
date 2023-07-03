import { Outlet } from "react-router-dom"
import Header from "../../components/header"


function Agenda(){
    const rotas: string[] = ["/agenda", "/agenda/agendamentos", "/agenda/servicos", "/agenda/cliente"]
    return(
        <div className="h-full w-full">   
           <Header rotas={rotas}/>
           <Outlet/>
        </div>
    )
}
export default Agenda