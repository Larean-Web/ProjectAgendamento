import Title from "../../shared/title"

import { LuCalendar } from "react-icons/lu"
import { BsFillQuestionCircleFill } from "react-icons/bs"
import Date from "../../components/date"
import { Outlet } from "react-router-dom"

function Sheduling(){
    return(
        <div className="flex flex-col w-full h-[92%] p-2 bg-white">
            <header className="flex justify-between w-[90%] mx-auto items-center gap-7 text-darkblue-base">
                <div className="text-darkblue-base text-3xl font-bold">
                    <Title
                        title="Agendamentos"
                    />
                </div>
                <div className="flex items-center gap-5">
                    <button>
                        <LuCalendar size={26}/>
                    </button>
                    <button>
                        <BsFillQuestionCircleFill size={26}/>
                    </button>
                </div>
            </header>
            <nav className="flex justify-evenly my-5">
                <Date day="dom" number={21} month="jun" route="/1" />
                <Date day="seg" number={22} month="jun" route="/2" />
                <Date day="ter" number={23} month="jun" route="/3" />
                <Date day="qua" number={24} month="jun" route="/4" />
                <Date day="qui" number={25} month="jun" route="/5" />
                <Date day="sex" number={26} month="jun" route="/6" />
                <Date day="sab" number={26} month="jun" route="/7" />
            </nav>
            <main className="border-t-4 border-darkblue-base">
                <Outlet/>
            </main>
        </div>
    )
}
export default Sheduling