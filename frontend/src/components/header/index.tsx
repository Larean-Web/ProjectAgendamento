import { AiFillHome } from 'react-icons/ai'
import { LuCalendar } from 'react-icons/lu'
import { LiaClipboardListSolid } from 'react-icons/lia'
import { IoPersonSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

type AppProps = {
    rotas: string[]
}
function Header({rotas}: AppProps){
    return(
        <div className="bg-darkblue-base h-19 w-full py-5">
            <ul className="flex justify-evenly text-white">
                <li>
                    <Link to={rotas[0]}><AiFillHome size={26}/></Link>
                </li>
                <li>
                    <Link to={rotas[1]}><LuCalendar size={26}/></Link>
                </li>
                <li>
                    <Link to={rotas[2]}><LiaClipboardListSolid size={26}/></Link>
                </li>
                <li className='border-2 rounded-full p-[2px]'>
                    <Link to={rotas[3]}><IoPersonSharp size={20}/></Link>
                </li>
            </ul>
        </div>
    )
}
export default Header