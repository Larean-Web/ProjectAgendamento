import { Outlet } from "react-router-dom";
import Date from "../../components/date";
import { BiTargetLock } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Title } from "../../shared/title";

function Scheduling() {
    return (
        
            <div className="flex flex-col p-2 bg-white h-[92%] w-full">
                <header className="flex justify-between w-[90%] mx-auto items-center gap-7 text-darkblue-base">
                    <div className="text-darkblue-base text-3xl font-bold">
                        <Title title="Agendamentos" />
                    </div>
                    <div className="flex items-center gap-5">
                        <button>
                            <BiTargetLock size={26} />
                        </button>
                        <button>
                            <LuCalendar size={23} />
                        </button>
                        <button>
                            <BsFillQuestionCircleFill size={24} />
                        </button>
                    </div>
                </header>
                <div className="flex justify-evenly my-5">
                    <Date
                        day="dom"
                        number={21}
                        month="jun"
                        route="calendar/1"
                    />
                    <Date
                        day="seg"
                        number={22}
                        month="jun"
                        route="calendar/2"
                    />
                    <Date
                        day="ter"
                        number={23}
                        month="jun"
                        route="calendar/3"
                    />
                    <Date
                        day="qua"
                        number={24}
                        month="jun"
                        route="calendar/4"
                    />
                    <Date
                        day="qui"
                        number={25}
                        month="jun"
                        route="calendar/5"
                    />
                    <Date
                        day="sex"
                        number={26}
                        month="jun"
                        route="calendar/6"
                    />
                    <Date
                        day="sab"
                        number={26}
                        month="jun"
                        route="calendar/7"
                    />
                </div>
                <div className="border-t-4 border-darkblue-base">
                    <Outlet />
                </div>
            </div>
    );
}
export default Scheduling;
