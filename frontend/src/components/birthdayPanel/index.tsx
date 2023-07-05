import { IoPersonSharp } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";

function BirthdayPanel() {
    return (
        <div className="flex justify-between items-center w-[90%] p-3 border-b-2">
            <div className="flex items-center gap-2">
                <div className="border-2 border-darkblue-base rounded-full text-darkblue-base">
                    <IoPersonSharp size={20} />
                </div>
                <h1>Cristiano Fulano</h1>
            </div>

            <button>
                <BsPencilSquare size={20} />
            </button>
        </div>
    );
}
export default BirthdayPanel;
