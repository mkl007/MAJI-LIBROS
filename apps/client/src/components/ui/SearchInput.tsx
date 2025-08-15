import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { InputUI } from "./InputUI";

export const SearchInput = () => {
    const [showInput, setShowInput] = useState(false);
    const [searchText, setSearchText] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);

    const toggleInput = () => {
        setShowInput((prev) => !prev);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log(searchText)
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setShowInput(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowInput(false);
            }
        };

        if (showInput) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [showInput]);

    return (
        <div ref={wrapperRef} className="relative">
            <button
                onClick={toggleInput}
                className="text-white bg-gray-800 p-2 rounded-lg shadow-sm"
                aria-label="Toggle search"
            >
                {showInput ? <FaTimes /> : <FaSearch />}

            </button>

            {showInput && (
                <div className="fixed top-0 left-0 w-full h-16 sm:h-16  z-10 bg-white shadow-md
                                  flex ">
                    <div className="w-full max-w-2xl flex items-center justify-between px-4 ">
                        <button
                            onClick={toggleInput}
                            className="text-gray-600 hover:text-red-600 p-2 rounded-lg mt-2  "
                            title="Close search"
                        >
                            <FaTimes />
                        </button>
                        <InputUI
                            id="search"
                            autoComplete="on"
                            name="search"
                            onChange={onChange}
                            placeholder="Search"
                            required
                            type="text"
                            disabled={false}
                            className="w-full px-4 py-2 mr-64 rounded-lg focus:outline-none focus:ring-0
                                         "
                        />

                    </div>
                    <button
                        onClick={() => console.log("Search")}
                        className="text-gray-600 hover:text-red-600 p-4  rounded-lg "
                        title=" search"
                    >
                        <FaSearch />
                    </button>
                </div>
            )}
        </div>
    );
};

