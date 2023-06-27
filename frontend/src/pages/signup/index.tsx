import { useState } from "react";
import { Title } from "../../shared/title";
import { Link } from "react-router-dom";
import { Paragraph } from "../../shared/paragraph";

function SigUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState("");

  async function handleSigup(event: any) {
    event.preventDefault();

    if (name == "" || email == "" || contact == "" || password == "" || isPassword == "") {
      alert("error");
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
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[200px] bg-gray-base/25 h-10 rounded-[50px] py-1 pl-5 outline-none"
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            value={isPassword}
            onChange={(e) => setIsPassword(e.target.value)}
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
