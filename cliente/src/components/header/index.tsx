import * as Logo from "../../assets"

function Header(){

    return(
        <header className="flex justify-between items-center w-full p-6 h-20">
                <img src={Logo.SecundLogo} alt="" className="w-20"/>
                <img src={Logo.Example} alt="" className="w-[60px] h-[60px] rounded-full" />
            </header>
    )
}
export default Header