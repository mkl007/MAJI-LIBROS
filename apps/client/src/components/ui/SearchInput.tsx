import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchInput = () => {
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <div className="flex items-center w-48 sm:w-auto relative">
            <button
                onClick={toggleInput}
                // onBlur={() => setShowInput(false)}
                className="text-gray-50 bg-gray-800 p-2 rounded-lg shadow-sm"
            >
                <FaSearch />
            </button>

            {showInput && (
                <input

                    // onBlur={() => setShowInput(false)}
                    onFocus={() => setShowInput(true)}
                    type="text"
                    name="search"
                    autoComplete="search"
                    required
                    placeholder="Quick Search..."
                    onChange={(e) => console.log(e.target.value)}
                    className="absolute left-0 top-full mt-2 w-48 
                                sm:w-64 px-3 py-2 rounded-lg bg-gray-800
                                 text-gray-100 placeholder-gray-50 shadow-md 
                                 focus:outline-none border border-gray-600"
                />
            )}
        </div>
    );
};
