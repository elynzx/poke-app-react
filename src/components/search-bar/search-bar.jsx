import { ChevronDown, Search } from "pixelarticons/react";
import { useState } from "react";

const POKEMON_TYPES = [
    "all",
    "grass",
    "fire",
    "water",
    "bug",
    "normal",
    "poison",
    "electric",
    "fairy",
];

export const SearchBar = ({ search, setSearch, onFilterType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState("Filter by Type");
    const handleTypeSelect = (type) => {
        setSelectedType(type === "all" ? "Filter by Type" : type);
        setIsOpen(false);
        if (onFilterType) onFilterType(type);
    };
    return (
        <div className="font-item text-[12px] h-28 md:h-22 px-4 md:px-16 bg-bgDarkGray w-full flex items-center">
            <div className="flex flex-col md:flex-row gap-2 w-full mt-4">
                <div className="flex gap-2 w-full md:w-auto text-white tracking-wide">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name or ID"
                        className="bg-white h-7 w-full md:w-64 text-xs px-4 rounded-md font-semibold text-bgDarkGray shadow-xs outline-none border-2 border-transparent focus:border-bgPink/50 transition-all placeholder:text-bgDarkGray/50"
                    />
                    <button
                        className="flex h-7 bg-white text-bgDarkGray rounded-md px-4 items-center gap-2 uppercase font-bold hover:bg-bgDarkPink hover:text-white transition-colors"
                    >
                        <Search />
                        <span className="hidden sm:inline">Search</span>
                    </button>
                </div>

                <div className="relative text-xs w-full md:w-48">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-7 px-3 w-full text-bgDarkGray font-bold bg-white border-2 border-transparent rounded-md flex items-center justify-between hover:border-bgPink transition-all"
                    >
                        <span className="capitalize">{selectedType}</span>
                        <ChevronDown
                            className={`ml-2 shrink-0 text-bgDarkGray/80 text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        />
                    </button>

                    {isOpen && (
                        <ul className="absolute left-0 mt-1 w-full max-h-60 bg-white text-bgDarkGray rounded-md shadow-2xl z-50 overflow-y-auto scrollbar-hide">
                            {POKEMON_TYPES.map((type) => (
                                <li
                                    key={type}
                                    onClick={() => handleTypeSelect(type)}
                                    className="px-4 py-2 border-b border-gray-100 last:border-none capitalize hover:bg-bgDarkPink hover:text-white cursor-pointer transition-colors"
                                >
                                    {type}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
