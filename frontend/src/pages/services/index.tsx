import { useState } from "react";
import { Title } from "../../shared/title";

import { BsTrash, BsFillQuestionCircleFill } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

function Services() {
    const [search, setSearch] = useState<string>("");
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [newCategory, setNewCategory] = useState<string>("");

    function handleSearch() {
        alert(search);
        setSearch("");
    }
    function handleAddCategory() {}
    return (
        <div className="flex flex-col p-2 bg-white h-[92%] w-full">
            <header className="flex justify-between items-center gap-7 w-[90%] mx-auto text-darkblue-base">
                <div className="text-darkblue-base text-3xl font-bold">
                    <Title title="Serviços" />
                </div>
                <div className="flex items-center gap-5">
                    <button>
                        <BsTrash size={26} />
                    </button>
                    <button onClick={() => setIsAdd(!isAdd)}>
                        <RiAddFill size={26} />
                    </button>
                    <button>
                        <BsFillQuestionCircleFill size={26} />
                    </button>
                </div>
            </header>
            <div className="relative mx-auto my-10">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquise por nome"
                    className="bg-gray-base/75 h-10 w-[350px] rounded-[10px] px-[50px] outline-none"
                />
                <button
                    className="absolute left-3 top-2 text-darkblue-base"
                    onClick={handleSearch}
                >
                    <AiOutlineSearch size={26} />
                </button>
            </div>

            <button
                className={isAdd ? "hidden" : "m-auto text-darkblue-base font-bold"}
                onClick={() => setIsAdd(!isAdd)}
            >
                <RiAddFill size={40} />
            </button>
            <div className={isAdd ? "flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1" : "hidden"}>
                <div className="flex flex-col items-center w-[380px] h-[300px] border-2 border-darkblue-base">
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
                            onClick={() => {
                                setIsAdd(false)
                                setNewCategory("")
                                }   
                            }
                            className="bg-red-500 w-[100px] rounded-xl text-white font-bold"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleAddCategory}
                            className="bg-green-500 w-[100px] rounded-xl text-white font-bold"
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;

