import { useState } from "react";
import { Title } from "../../shared/title";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go"
import Alerta from "../../components/alert";

function NewPassword() {
    const [email, setEmail] = useState<string>("");

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    async function handleEmail(event:any) {
        event.preventDefault();

        if(email == ""){
            setShowAlert(true);
            setMessage("Preencha o campo corretamente");
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
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
                <Link to="/"><GoArrowLeft size={26}/></Link>
            </div>
            <div className="text-white text-3xl font-bold">
                <Title title="Larean" />
            </div>
            <form onSubmit={handleEmail} className="flex flex-col justify-center items-center gap-8 bg-white rounded-t-[50px] w-full h-2/5 mb-[0]">
                <div className="text-pink-base text-3xl font-bold">
                    <Title title="Esqueceu sua senha" />
                </div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email de confirmação"
                    className="bg-gray-base w-[280px] h-10 rounded-[50px] pl-5 outline-none"
                />
                <button type="submit" className="bg-pink-base w-[280px] h-10 rounded-[50px]  text-white font-bold text-2xl">
                    Enviar
                </button>
            </form>
        </div>
    );
}
export default NewPassword;

