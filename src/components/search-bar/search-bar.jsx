import { ChevronDown, Search } from "pixelarticons/react";
import { useState } from "react";
import { FilterDropdown } from "../filter-dropdown/filter-dropdown";

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
const GENERATIONS = ["all", "Gen I", "Gen II", "Gen III", "Gen IV", "Gen V"];

export const SearchBar = ({ search, setSearch, onFilterType, onFilterGen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState("Filter by Type");

    const handleTypeSelect = (type) => {
        setSelectedType(type === "all" ? "Filter by Type" : type);
        setIsOpen(false);
        if (onFilterType) onFilterType(type);
    };

    return (
        <div className="font-item text-[12px] min-h-25 md:h-20 px-4 md:px-14 bg-bgDarkGray w-full flex items-center py-4 md:py-0">
            <div className="flex flex-col md:flex-row gap-3 w-full justify-between items-center">
                <div className="flex gap-2 w-full md:w-auto h-9 md:h-10 text-white tracking-wide bg-white rounded-md items-center px-3 border-2 border-transparent focus-within:border-bgPink transition-all">
                    <Search className="text-bgDarkGray shrink-0" size={18} />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name or ID"
                        className="bg-transparent w-full md:w-64 text-xs font-semibold text-bgDarkGray outline-none placeholder:text-bgDarkGray/40"
                    />
                </div>

                <div className="flex gap-2 md:gap-4 w-full md:w-110">
                    <FilterDropdown
                        title="Filter by Type"
                        options={POKEMON_TYPES}
                        onSelect={onFilterType}
                    />
                    <FilterDropdown
                        title="Generation"
                        options={GENERATIONS}
                        onSelect={onFilterGen}
                    />
                </div>
            </div>
        </div>
    );
};
