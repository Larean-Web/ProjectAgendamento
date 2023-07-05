import { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { Title } from "../../shared/title";
import { Paragraph } from "../../shared/paragraph";
import Alerta from "../../components/alert";
import axios from "axios";

import { BsEyeSlash, BsEye } from "react-icons/bs";

function SignUp() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>(""); //Estados que controlam os dados
    const [contact, setContact] = useState<string>();
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [showAlert, setShowAlert] = useState<boolean>(false); //estados que disparam os alertas conforme o erro
    const [message, setMessage] = useState<string>("");

    const [showPassword, setShowPassword] = useState<boolean>(false); //estados e refs que definem se esconde ou mostra senha
    const hidePasswword = useRef<HTMLInputElement | null>(null);
    const hideConfirm = useRef<HTMLInputElement | null>(null);

    const [isLogged, setIsLogged] = useState<boolean>(false)
    

    const BASE_ROTA_CADASTRO = import.meta.env.VITE_CADASTRO_ROUTE 


    if(isLogged){
        return(
            <Navigate to="/"/>      //quando o usuario fizer o cadastro, será redirecionado a pagina de login para que ele consiga entrar na pagina de adm
        )
    }

    function handleSigup(event: any) {
        event.preventDefault();

        if (
            name == "" ||
            email == "" ||
            contact == "" ||
            password == "" ||
            confirmPassword == ""
        ) {
            setShowAlert(true);
            setMessage("Preencha os campos corretamente");
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        } else {
            if (confirmPassword !== password) {
                setShowAlert(true);
                setMessage("As senhas não correspondem");
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            }
        }
        const data = {
            nome: name,
            email: email,
            contato: contact,
            password: password,
        };
        axios
            .post(
                BASE_ROTA_CADASTRO,
                data
            )
            .then(() => {
                console.log("Usuario cadastrado com sucesso");
                setName("")
                setEmail("")
                setContact("")
                setPassword("")
                setConfirmPassword("")
                setTimeout(() => {
                    setIsLogged(true)  //Esse estado vai verificar se o usuario se cadastrou corretamente e vai altorizar a mudança para a rota de login 
                }, 2000)
            })
            .catch((err) => {
                console.log("Algo deu errado" + err);
                setName("")
                setEmail("")
                setContact("")
                setPassword("")
                setConfirmPassword("")
            });
    }

    if (showPassword === false) {
        hidePasswword.current?.setAttribute("type", "password");
        hideConfirm.current?.setAttribute("type", "password");
    } else {
        hidePasswword.current?.setAttribute("type", "text");
        hideConfirm.current?.setAttribute("type", "text");
    }

    return (
        <div className="flex items-center  bg-darkblue-base justify-center  h-full w-full">
            <div
                className={
                    showAlert
                        ? "flex justify-center absolute top-5 w-5/6"
                        : "hidden"
                }
            >
                <Alerta message={message} />
            </div>
            <div className="flex justify-center items-center bg-white w-[400px] h-[500px] rounded-tl-[50px] rounded-tr-[200px] rounded-br-[50px] rounded-bl-[200px] shadow-xl shadow-gray-800">
                <form onSubmit={handleSigup} className="flex flex-col gap-2">
                    <div className="text-pink-base text-3xl font-bold mb-5">
                        <Title title="Criando conta" />
                    </div>
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Celular (DDD)****"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
                    />
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
                            ref={hidePasswword}
                        />
                        <div
                            className="absolute top-3 right-20 text-pink-base hover:cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                        </div>
                    </div>
                    <input
                        type="password"
                        placeholder="Confirmar senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
                        ref={hideConfirm}
                    />

                    <div className="flex flex-col gap-4 my-2">
                        <div className="flex gap-1 items-center text-sm">
                            <input
                                type="checkbox"
                                className="w-4 h-4 border-[2px] appearance-none checked:bg-pink-base"
                            />
                            <div>
                                <Paragraph text="relembrar senha" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-[250px] bg-pink-base rounded-[50px] h-7 text-white font-bold shadow-gray-400 shadow-md "
                        >
                            Criar conta
                        </button>
                    </div>
                    <Link
                        to="/"
                        className="font-bold my-[10px] ml-[60px] text-sm"
                    >
                        Já tenho conta? Entrar
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default SignUp;
