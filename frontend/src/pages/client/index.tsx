import { useState } from "react";
import BirthdayPanel from "../../components/birthdayPanel";
import Search from "../../components/search";
import { AddClient } from "../../components/modal";
import { Title } from "../../shared/title";

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BsFillQuestionCircleFill, BsTrash } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io"








function Client() {
    const [isAdd, setIsAdd] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center p-2 bg-white h-[92%] w-full">
            <header className="flex justify-between w-[90%] mx-auto items-center gap-7 text-darkblue-base">
                <div className="text-darkblue-base text-3xl font-bold">
                    <Title title="Clientes" />
                </div>
                <div className="flex items-center gap-5">
                    <button>
                        <LiaBirthdayCakeSolid size={26} />
                    </button>
                    <button>
                        <BsTrash size={26} />
                    </button>
                    <button onClick={() => setIsAdd(!isAdd)}>
                        {isAdd ? <IoMdClose size={26}/> :<RiAddFill size={26} />}
                    </button>
                    <button>
                        <BsFillQuestionCircleFill size={24} />
                    </button>
                </div>
            </header>
            <div className="mx-auto my-10">
                <Search />
            </div>
            <div
                className={
                    isAdd
                        ? "flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1"
                        : "hidden"
                }
            >
                <AddClient />
            </div>

            <div className="flex justify-center w-full border-t-4 border-darkblue-base ">
                <BirthdayPanel />
            </div>
        </div>
    );
}
export default Client;

