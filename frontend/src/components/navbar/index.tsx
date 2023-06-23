import { Link } from "react-router-dom";
import { Title } from "../../shared/title";

function NavBar() {
  return (
    <div className="flex justify-between w-10/12 m-auto py-5">
      <div className="text-blue-400 text-2xl font-bold">
        <Link to="/">
          <Title title="Larean"/>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li className="flex justify-center items-center rounded-[60px] h-8 bg-blue-400 w-20 text-white font-bold hover:bg-blue-200 hover:cursor-pointer hover:text-blue-500 shadow-md">sobre</li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
