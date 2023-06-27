import { useState } from "react";
import { Title } from "../../shared/title";
import { Link } from "react-router-dom";
import { Paragraph } from "../../shared/paragraph";

function SigUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleSigup(event: any) {
    event.preventDefault();

    if (nome == "" || email == "" || contato == "" || senha == "" || confirmarSenha == "") {
      alert("Erro, preencha os campos abaixo corretamente e tente novamente");
    }else{
      if(confirmarSenha !== senha){
        alert(`Erro, senhas estão diferentes, verifique-as e tente novamente`)
      }
    }
  }

  return (
    <div className="flex items-center  bg-darkblue-base justify-center  h-full w-full">
      <div className="flex justify-center items-center bg-white w-[400px] h-[500px] rounded-tl-[50px] rounded-tr-[200px] rounded-br-[50px] rounded-bl-[200px] shadow-xl shadow-gray-800">
        <form onSubmit={handleSigup} className="flex flex-col gap-2">
          <div className="text-pink-base text-3xl font-bold mb-5">
            <Title title="Criando conta" />
          </div>
          <input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
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
          <Link to="/" className="font-bold my-[10px] ml-[60px] text-sm">
            Já tenho conta? Entrar
          </Link>
        </form>
      </div>
    </div>
  );
}
export default SigUp;
