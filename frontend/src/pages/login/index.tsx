import { useState } from "react";
import { Title } from "../../shared/title";
import { Link } from "react-router-dom";
import Alerta from "../../components/alerta";

function Login() {
    const [usuario, setUsuario] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [mostrarAlerta, setMostrarAlerta] = useState<boolean>(false);
    const [mensagem, setMensagem] = useState<string>("");

    async function handleSignin(event: any) {
        event.preventDefault();

        if (usuario == "" || senha == "") {
            setMostrarAlerta(true);
            setMensagem("Preencha os campos corretamente");
            setTimeout(() => {
                setMostrarAlerta(false);
            }, 2000);
        }
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
                    mostrarAlerta
                        ? "flex justify-center absolute top-5 w-5/6"
                        : "hidden"
                }
            >
                <Alerta mensagem={mensagem} />
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
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className="bg-gray-base/25 w-60 rounded-[50px] h-8 px-5 text-white outline-none"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="bg-gray-base/25 w-60 rounded-[50px] h-8 px-5 text-white outline-none"
                />

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
export default Login;
