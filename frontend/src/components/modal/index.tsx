import { useState } from "react"
import { Title } from "../../shared/title"

export function AddCategoy() {
    const [newCategory, setNewCategory] = useState<string>("");


    function handleAddCategory() {}

    return (
        
                <div className="flex flex-col items-center w-[380px] h-[300px] border-2 border-darkblue-base bg-white">
                    <header className="flex items-center justify-center bg-darkblue-base w-full h-14 ">
                        <div className="text-center text-2xl text-white font-bold">
                            <Title title="Categoria Serviço" />
                        </div>
                    </header>
                    <div className="my-20">
                        <input
                            type="text"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            placeholder="Nome da categoria do serviço"
                            className="outline-none border-b-2 border-darkblue-base w-[300px] py-2"
                        />
                    </div>
                    <div className="flex gap-10">
                        <button
                            onClick={handleAddCategory}
                            className="bg-green-500 w-[100px] rounded-xl text-white font-bold"
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            
    )
}

export function AddClient() {
    const [newBirthday, setNewBirthday] = useState<string>("")
    const [firstNumber, setFirstNumber] = useState<string>()
    const [number, setNumber] = useState<string>()
    const [birthdayDate, setBirthdayDate] = useState<string>()

    function handleAddClient() {

    }
    return (
            <div className="flex flex-col items-center w-[380px] h-[400px] border-2 border-darkblue-base bg-white">
                <header className="flex items-center justify-center bg-darkblue-base w-full h-14 ">
                    <div className="text-center text-2xl text-white font-bold">
                        <Title title="Adicionar Cliente" />
                    </div>
                </header>
                <div className="flex flex-col gap-5 my-10">
                    <input
                        type="text"
                        value={newBirthday}
                        onChange={(e) => setNewBirthday(e.target.value)}
                        placeholder="Nome e Sobrenome do Cliente"
                        className="outline-none border-b-2 border-darkblue-base w-[300px] py-2"
                    />
                    <div className="flex gap-7">
                        <input
                            type="tel"
                            value={firstNumber}
                            onChange={(e) => setFirstNumber(e.target.value)}
                            placeholder="DDD"
                            className="outline-none border-b-2 border-darkblue-base w-[40px] py-2"
                        />
                        <input
                            type="tel"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Número de telefone"
                            className="outline-none border-b-2 border-darkblue-base w-[231px] py-2"
                        />
                    </div>
                    <input
                        type="number"
                        value={birthdayDate}
                        onChange={(e) => setBirthdayDate(e.target.value)}
                        placeholder="Data de Nascimento"
                        className="outline-none border-b-2 border-darkblue-base w-[300px] py-2"
                    />
                </div>
                <div className="flex gap-10">
                    <button
                        onClick={handleAddClient}
                        className="bg-green-500 w-[100px] rounded-xl text-white font-bold"
                    >
                        Adicionar
                    </button>
                </div>
            </div>

    )
}