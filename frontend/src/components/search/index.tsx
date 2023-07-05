import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai"

function Search() {
    const [search, setSearch] = useState<string>("")
    function handleSearch() {
        alert(search);
        setSearch("");
    }
    return (
        <div className="relative mx-auto my-10">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquise por nome"
                className="bg-gray-base/75 h-10 w-[350px] rounded-[10px] px-[50px] outline-none"
            />
            <button
                className="absolute left-3 top-2 text-darkblue-base"
                onClick={handleSearch}
            >
                <AiOutlineSearch size={26} />
            </button>
        </div>
    );
}
export default Search;
