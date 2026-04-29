import { ChevronDown, Search } from "pixelarticons/react";
import { useState } from "react";
import { FilterDropdown } from "../filter-dropdown/filter-dropdown";
import { useGetFilters } from "../../hooks/use-filters";

export const SearchBar = ({ search, setSearch, setType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { types, loading, error } = useGetFilters();

    return (
        <div className="font-item text-[12px] min-h-25 md:h-20 px-4 md:px-14 bg-bgDarkGray w-full flex items-center py-4 md:py-0">
            <div className="flex flex-col md:flex-row gap-3 w-full justify-between items-center">
                <div className="flex gap-2 w-full md:max-w-xs h-10 text-white tracking-wide bg-white rounded-md items-center px-3 border-2 border-transparent focus-within:border-bgPink transition-all">
                    <Search className="text-bgDarkGray shrink-0" size={18} />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name or ID"
                        className="bg-transparent w-full md:w-64 text-xs font-semibold text-bgDarkGray outline-none placeholder:text-bgDarkGray/40"
                    />
                </div>

                <div className="flex flex-row gap-2 md:gap-4 w-full md:w-auto">
                    <FilterDropdown
                        title={"Filter by type"}
                        options={["Show All", ...types]}
                        onSelect={setType}
                    />
                </div>
            </div>
        </div>
    );
};
