import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Title } from "../../shared/title";
import Alerta from "../../components/alert";
import axios from "axios";

import { BsEyeSlash, BsEye } from "react-icons/bs";

function SigIn() {
    const [user, setUser] = useState<string>(""); //Estados que controlam os dados
    const [password, setPassword] = useState<string>("");

    const [showAlert, setShowAlert] = useState<boolean>(false); //estados que disparam os alertas conforme o erro
    const [message, setMessage] = useState<string>("");

    const [showPassword, setShowPassword] = useState<boolean>(false); //estados e refs que definem se esconde ou mostra senha
    const hidePasswword = useRef<HTMLInputElement | null>(null);
    
    const navegate = useNavigate()

    const BASE_ROTA_LOGIN = import.meta.env.VITE_LOGIN_ROUTE

    async function handleSignin(event: any) {
        event.preventDefault();

        if (user == "" || password == "") {
            setShowAlert(true);
            setMessage("Preencha os campos corretamente");
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
        const data = {
            email: user,
            password: password,
        };
        axios
            .post(
                BASE_ROTA_LOGIN,
                data
            )
            .then((response) => {
                const userData = response.data
                localStorage.setItem("@detailUser", JSON.stringify(userData))
                navegate("/agenda", {replace: true})
                setUser("");
                setPassword("");
            })
            .catch((err) => {
                console.log("Deu erro" + err);
                setUser("");
                setPassword("");
            });
            
    }
    

    if (showPassword === false) {
        hidePasswword.current?.setAttribute("type", "password");
    } else {
        hidePasswword.current?.setAttribute("type", "text");
    }
    return (
        <div className="flex flex-col justify-center items-center gap-6 bg-darkblue-base w-full h-full">
            {/* alguns detalhes e enfeites adicionados ao site */}
            <div className="absolute bg-blue-base/75 w-20 h-20 rounded-full left-[-20px] top-[-20px]"></div>
            <div className="fixed bg-purple-base w-5 h-5 rounded-full left-[15%] top-[7%]"></div>
            <div className="absolute bg-blue-base w-5 h-5 rounded-full left-[13%] bottom-[9%]"></div>
            <div className="absolute bg-purple-base w-20 h-20 rounded-full left-[-25px] bottom-[0]"></div>

            <div className="absolute bg-blue-base/25 w-10 h-20 rounded-l-full right-[-0px] top-[20px]"></div>
            <div className="absolute bg-purple-base w-10 h-20 rounded-l-full right-[-0px] bottom-[60px]"></div>

            {/* alguns detalhes e enfeites adicionados ao site */}

            <div
                className={
                    showAlert
                        ? "flex justify-center absolute top-5 w-5/6"
                        : "hidden"
                }
            >
                <Alerta message={message} />
            </div>

            <form
                onSubmit={handleSignin}
                className="flex flex-col items-center gap-3 my-20"
            >
                <div className="text-white text-3xl font-bold">
                    <Title title="Bem Vindo" />
                </div>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="bg-gray-base/25 w-60 rounded-[50px] h-8 px-5 text-white outline-none"
                />

                <div className="relative">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-base/25 w-60 rounded-[50px] h-8 px-5 text-white outline-none"
                        ref={hidePasswword}
                    />
                    <div
                        className="absolute top-2 right-5 text-gray-base hover:cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </div>
                </div>

                <div className="flex flex-col items-center text-white gap-2">
                    <button
                        type="submit"
                        className="bg-blue-base w-60 p-1 rounded-[50px] h-8 text-white font-bold"
                    >
                        Enviar
                    </button>
                    <Link to="/novasenha" className="text-sm font-bold">
                        Esqueci minha senha
                    </Link>
                </div>
                <Link
                    to="/registro"
                    className="my-5 text-white text-sm font-bold"
                >
                    Não tem cadastro? Criar Conta
                </Link>
            </form>
            <div className="text-white font-bold">
                <Title title="Desenvolvido por Larean" />
            </div>
        </div>
    );
}
export default SigIn;
