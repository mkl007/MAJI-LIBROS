import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { InputUI } from "./InputUI";

export const SearchInput = () => {
    const [showInput, setShowInput] = useState(false);
    const [searchText, setSearchText] = useState("");

    const toggleInput = () => {
        setShowInput((prev) => !prev);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleInput}
                className="text-gray-50 bg-gray-800 p-2 rounded-lg shadow-sm"
            >
                <FaSearch />
            </button>

            {showInput && (
                <div className="fixed inset-0 z-50 
                                bg-opacity-80 flex 
                                items-center justify-center px-2 
                                sm:w-full sm:h-1/3">
                    <div className=" relative w-full sm:w-1/2 lg:w1/3">
                        <button
                            onClick={toggleInput}
                            className=" absolute left-1 text-white text-xl p-2"
                        >
                            <FaTimes />
                        </button>
                        <input
                            type="text"
                            autoFocus
                            name="search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Quick Search..."
                            className="w-full px-5 py-3 pl-12 
                                        rounded-lg bg-gray-800
                                         text-white placeholder-gray-400 
                                         text-lg focus:outline-none shadow-lg"
                        />
                    
                    </div>
                </div>
            )}
        </div>
    );
};
