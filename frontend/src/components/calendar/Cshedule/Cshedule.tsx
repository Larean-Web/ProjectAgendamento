import { useState } from "react";
interface AppProps {
    name: string,
    service: string,
    start: number,
    stop: number
    price: string
}
function CSchedule({name, service, start, stop, price}: AppProps) {
    const [checked, setChecked] = useState<boolean>(false)
    const [confirmed, setConfirmed] = useState<boolean>(false)
    const handleChange = () => {
        setChecked(!checked);
        if(checked){
            setConfirmed(false)
        }else{
            setConfirmed(true)
        }
    };
    return (
        <div className="border-b-2">
            <div className="w-[99%] m-auto my-[2px]">
                <div
                    className={
                        confirmed
                            ? "bg-green-400 flex justify-evenly items-center gap-2 border-b-2 text-darkblue-base rounded-md"
                            : "flex justify-evenly items-center gap-2 border-b-2 w-full rounded-md bg-gray-base/75"
                    }
                >
                    <div>
                        <h1 className="text-sm font-bold">{name}</h1>
                        <p className="text-sm">{service}</p>
                    </div>
                    <div className="flex">
                        <h1 className="text-sm">{start}:00</h1>
                        <i className="text-sm">-</i>
                        <h1 className="text-sm">{stop}:00</h1>
                    </div>
                    <div>
                        <h1>R${price}</h1>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CSchedule
