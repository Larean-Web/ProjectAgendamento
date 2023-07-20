import { useState } from "react";
import { AddSheduling } from "../../modal";
import { RiAddFill } from "react-icons/ri";



function CSchedule({reserva}: any) {
    const [addReserve, setAddReserve] = useState<boolean>(false)

    // vou pegar os dados que serão enviados para o banco de dados e fazer uma verificação
    // Caso exista horarios agendados, o icone de add vai ser substituido pelas informações
    // Caso não exista o icone de add vai continuar aparecendo
    return (
        <div className="border-b-2">
            <div className="w-[99%] m-auto my-[2px]">
                <div className="flex justify-evenly items-center gap-2 border-b-2 w-full rounded-md bg-gray-base/75">
                    <button onClick={() => setAddReserve(!addReserve)}>
                        {reserva ? <div>Passando valores</div> : <RiAddFill size={26}/>}
                    </button>
                </div>
            </div>
            <div className={addReserve ? "flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1 ": "hidden"}>
                <AddSheduling addReserve={addReserve} setAddReserve={setAddReserve}/>
            </div>
        </div>
    );
}
export default CSchedule