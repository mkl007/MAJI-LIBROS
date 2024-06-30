import { FaSearch } from "react-icons/fa";

export const SearchInput = () => {
    return (

            <div className="flex items-center w-80 border-1 border-gray-600 rounded-lg bg-gray-800 py-1.5 px-3 shadow-sm sm:leading-6">
                <input
                    id="search"
                    name="search"
                    type="text"
                    autoComplete="search"
                    required
                    placeholder="Quick Search..."
                    onChange={(e) => { console.log(e.type) }}
                    className="block w-full bg-gray-800  text-gray-900 placeholder-gray-50 focus:outline-none focus:text-gray-100"
                />
                <div className="bb">
                    <button type="submit">
                        <FaSearch className="mr-2 text-gray-50" />

                    </button>
                </div>

        </div>

    );



}
