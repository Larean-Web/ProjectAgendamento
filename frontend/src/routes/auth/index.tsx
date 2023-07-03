import { PropsWithChildren, ReactNode, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface AppProps extends PropsWithChildren {
    children: ReactNode 
}

function RotasPrivadas({children}: AppProps){
    const [loading, setLoading] = useState(true)
    const [signed, setSigned ] = useState(false) //verifica se ta logado 
    const userData = localStorage.getItem("@detailUser")
    

    useEffect(() => {
        async function checkLogin(){
                    //se possui alguém logado 
                if(userData){
                    setLoading(false)
                    setSigned(true)
                }else{
                    //se não possui alguém logado
                    setLoading(false)
                    setSigned(false)
                }
        }
        checkLogin()
    }, [])


    if(loading){
        return(
            <div></div>
        )
    }
    if(!signed){
        return(
            <Navigate to="/"/>
        )
    }




    return children
}
export default RotasPrivadas