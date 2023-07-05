import { useState, useRef } from "react";
import { Title } from "../../shared/title";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import Alerta from "../../components/alert";
import { BsEyeSlash, BsEye } from "react-icons/bs";

function RedefinePassword() {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const [showPassword, setShowPassword] = useState<boolean>(false); //estados e refs que definem se esconde ou mostra senha
    const hidePassword = useRef<HTMLInputElement | null>(null)
    const hideConfirm = useRef<HTMLInputElement | null>(null)

    async function handleRedefine(event: any) {
        event.preventDefault();

        if (password == "" || confirmPassword == "") {
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
    }

    if (showPassword === false) {
        hidePassword.current?.setAttribute('type', 'password')
        hideConfirm.current?.setAttribute('type', 'password')
    } else {
        hidePassword.current?.setAttribute('type', 'text')
        hideConfirm.current?.setAttribute('type', 'text')
    }
    return (
        <div className="flex flex-col justify-end items-center gap-40 bg-darkblue-base w-full h-full">
            <div className="absolute  top-0 left-0 rounded-br-[50px] bg-purple-base w-[70px] h-[70px]"></div>
            <div className="absolute  top-10 left-20 rounded-full bg-blue-base/75 w-[20px] h-[20px]"></div>
            <div className="absolute  top-60 left-0 rounded-tr-[200px] rounded-br-[200px] bg-blue-base/75 w-[39px] h-[70px]"></div>
            <div className="absolute  top-40 right-0 rounded-tl-[200px] rounded-bl-[200px] bg-blue-base/75 w-[39px] h-[70px]"></div>
            <div className="absolute  top-10 right-20 rounded-full bg-purple-base w-[30px] h-[30px]"></div>
            <div className="absolute  top-40 right-20 rounded-full bg-purple-base w-[20px] h-[20px]"></div>

            <div
                className={
                    showAlert
                        ? "flex justify-center absolute top-5 w-5/6"
                        : "hidden"
                }
            >
                <Alerta
                    message={message}
                />
            </div>

            <div className="text-white absolute left-10 top-10 font-bold ">
                <Link to="/">
                    <GoArrowLeft size={26} />
                </Link>
            </div>
            <div className="text-white text-3xl font-bold">
                <Title title="Larean" />
            </div>
            <form
                onSubmit={handleRedefine}
                className="flex flex-col justify-center items-center gap-7 bg-white rounded-t-[50px] w-full h-2/5 mb-[0]"
            >
                <div className="text-pink-base text-3xl font-bold">
                    <Title title="Esqueceu sua senha" />
                </div>
                <div className="relative">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nova Senha"
                        className="bg-gray-base w-[280px] h-10 rounded-[50px] pl-5 outline-none"
                        ref={hidePassword}
                    />
                    <div className="absolute top-3 right-5 text-pink-base hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </div>
                </div>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirmar nova senha"
                    className="bg-gray-base w-[280px] h-10 rounded-[50px] pl-5 outline-none"
                    ref={hideConfirm}
                />
                <button
                    type="submit"
                    className="bg-pink-base w-[280px] h-10 rounded-[50px]  text-white font-bold text-2xl"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
export default RedefinePassword;

