import { useState } from "react";
import { Title } from "../../shared/title";
import { GoArrowLeft } from "react-icons/go"
import { Link } from "react-router-dom";

function RedefinePassword(){
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    async function handleRedefine(event:any) {
        event.preventDefault();

        if(senha == "" || confirmarSenha == "" || confirmarSenha !== senha){
            alert(`Error, por favor preencha os campos abaixo corretamente e tente novamente`)
        }
    }
    return(
        <div className="flex flex-col justify-end items-center gap-40 bg-darkblue-base w-full h-full">

            <div className="absolute  top-0 left-0 rounded-br-[50px] bg-purple-base w-[70px] h-[70px]"></div>
            <div className="absolute  top-10 left-20 rounded-full bg-blue-base/75 w-[20px] h-[20px]"></div>
            <div className="absolute  top-60 left-0 rounded-tr-[200px] rounded-br-[200px] bg-blue-base/75 w-[39px] h-[70px]"></div>
            <div className="absolute  top-40 right-0 rounded-tl-[200px] rounded-bl-[200px] bg-blue-base/75 w-[39px] h-[70px]"></div>
            <div className="absolute  top-10 right-20 rounded-full bg-purple-base w-[30px] h-[30px]"></div>
            <div className="absolute  top-40 right-20 rounded-full bg-purple-base w-[20px] h-[20px]"></div>




            <div className="text-white absolute left-10 top-10 font-bold ">
                <Link to="/"><GoArrowLeft size={26}/></Link>
            </div>
            <div className="text-white text-3xl font-bold">
                <Title title="Larean" />
            </div>
            <form onSubmit={handleRedefine} className="flex flex-col justify-center items-center gap-7 bg-white rounded-t-[50px] w-full h-2/5 mb-[0]">
                <div className="text-pink-base text-3xl font-bold">
                    <Title title="Esqueceu sua senha" />
                </div>
                <input
                    type="email"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Nova Senha"
                    className="bg-gray-base w-[280px] h-10 rounded-[50px] pl-5 outline-none"
                />
                <input
                    type="email"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    placeholder="Confirmar nova senha"
                    className="bg-gray-base w-[280px] h-10 rounded-[50px] pl-5 outline-none"
                />
                <button type="submit" className="bg-pink-base w-[280px] h-10 rounded-[50px]  text-white font-bold text-2xl">
                    Enviar
                </button>
            </form>
        </div>
    )
}
export default RedefinePassword