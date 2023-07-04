
import { LuCalendar } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import * as Logo from "../../assets"

type AppProps = {
    rotas: string[];
};
function Header({ rotas }: AppProps) {
    return (
        <div className="bg-darkblue-base h-18 w-full ">
            <ul className="flex justify-evenly items-center text-white">
                <li className="w-[70px]">
                    <img src={Logo.SecundLogo}/>
                </li>
                <li className="hover:border-b-4 p-2">
                    <Link to={rotas[1]} className="border-b-2 border-gray-base">
                        <LuCalendar size={26} />
                    </Link>
                </li>
                <li className="hover:border-b-4 p-2">
                    <Link to={rotas[2]} className="border-b-2 border-gray-base">
                        <LiaClipboardListSolid size={26} />
                    </Link>
                </li>
                <li className="hover:border-b-4 p-2 border-gray-base">
                    <Link to={rotas[3]} className="flex border-[2px] rounded-full p-[1px]">
                        <IoPersonSharp size={26} />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default Header;
