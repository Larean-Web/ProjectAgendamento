import { useState } from "react";
import { Title } from "../../shared/title";
import Search from "../../components/search";

import { BsTrash, BsFillQuestionCircleFill } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { AddCategoy } from "../../components/modal";
import { IoMdClose } from "react-icons/io";

function Services() {
    const [isAdd, setIsAdd] = useState<boolean>(false);

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
                        {isAdd ? (
                            <IoMdClose size={26} />
                        ) : (
                            <RiAddFill size={26} />
                        )}
                    </button>
                    <button>
                        <BsFillQuestionCircleFill size={26} />
                    </button>
                </div>
            </header>
            <div className="mx-auto my-10">
                <Search />
            </div>

            <button
                className="m-auto text-darkblue-base font-bold"
                onClick={() => setIsAdd(!isAdd)}
            >
                <RiAddFill size={40} />
            </button>
            <div
                className={
                    isAdd
                        ? "flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1"
                        : "hidden"
                }
            >
                <AddCategoy isAdd={isAdd} setIsAdd={setIsAdd} />
            </div>
        </div>
    );
}
export default Services;

