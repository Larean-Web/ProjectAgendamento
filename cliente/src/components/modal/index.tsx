import { useState } from "react";
import Title from "../../shared/title";

import { BsWhatsapp } from "react-icons/bs";
export function AddSheduling({ addReserve, setAddReserve }: any) {
    const [name, setName] = useState<string>("");
    const [services, setServices] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [date, setDate] = useState("");






    async function handleTime(event: any){
        event.preventDefault();

        const data = {
            name: name,
            services: services,
            time: time, 
            contact: contact,
            date: date
        }
        localStorage.setItem("@horario", JSON.stringify(data))
    }




    return (
        <div className="w-[350px] h-[600px] border-2 border-darkblue-base bg-white">
            <header className="flex items-center justify-center w-full h-20 bg-darkblue-base">
                <div className="text-white text-2xl font-bold">
                    <Title title="Adicionar Agendamento" />
                </div>
            </header>
            <form onSubmit={handleTime} className="flex flex-col items-center my-10 w-full gap-5">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome e Sobrenome"
                    className="w-[300px] border-b-2 outline-none py-2"
                />
                <select
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    className="w-[300px] outline-none py-2 bg-white border-b-2"
                    placeholder="Serviços"
                >
                    <option value="Depilacão">Depilação</option>
                    <option value="Massagem">Massagem</option>
                </select>
                <div className="flex flex-col">
                    <input
                        type="datetime-local"
                        value={time}
                        placeholder="Data de agendamento"
                        onChange={(e) => setTime(e.target.value)}
                        className="w-[300px] outline-none py-2 border-b-2"
                    />
                    <span className="text-[9px] text-gray-400">
                        (Ex: 00/00/0000 data 00:00 horário) Data e horario que
                        você quer agendar.
                    </span>
                </div>
                <input
                    type="tel"
                    value={contact}
                    placeholder="Numero de contato"
                    onChange={(e) => setContact(e.target.value)}
                    className="outline-none w-[300px] py-2 border-b-2"
                />
                <div className="flex flex-col">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Data de Nascimento"
                        className="w-[300px] outline-none py-2 border-b-2"
                    />
                    <span className="text-[9px] text-gray-400">
                        (Ex.:00/00/0000) Mandar mensagem de aniversário
                    </span>
                </div>

                <div className="flex flex-col mr-[100px] gap-2">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-darkblue-base">
                            Lembrete WhatsApp
                        </h1>
                        <BsWhatsapp />
                    </div>

                    <div className="flex gap-2">
                        <input type="checkbox" />
                        <span className="text-[12px]">
                            Termo de Politica de Privacidade
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" />
                        <span className="text-[12px]">
                            Lembrete pelo WhatsApp
                        </span>
                    </div>
                </div>

                <div className="flex gap-5 ml-40 my-2">
                    <button
                        onClick={() => setAddReserve(!addReserve)}
                        className="font-bold"
                    >
                        Cancelar
                    </button>
                    <button type="submit" className="text-pink-base font-bold">
                        Agendar
                    </button>
                </div>
            </form>
        </div>
    );
}

