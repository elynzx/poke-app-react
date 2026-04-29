import { ChevronDown } from "pixelarticons/react";
import { useState } from "react";
import { POKEMON_TYPES_CONFIG } from "../../utils/pokemon-colors";

export const FilterDropdown = ({ title, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(title);

    const handleSelect = (option) => {
        const isAll = option === "Show All";
        setSelected(isAll ? title : option);
        setIsOpen(false);
        onSelect(isAll ? "all" : option);
    };

    return (
        <div className="relative text-xs w-full md:w-58 h-9 md:h-10 font-item">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="px-1 md:px-4 w-full h-full text-bgDarkGray font-bold bg-white border-2 border-transparent rounded-md flex items-center justify-between hover:border-bgPink transition-all active:scale-95"
            >
                <span className="truncate capitalize ml-2">{selected}</span>
                <ChevronDown
                    className={`shrink-0 text-bgDarkGray/80 text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </button>

            {isOpen && (
                <ul className="absolute left-0 mt-2 w-full max-h-52 bg-white text-bgDarkGray rounded-md shadow-2xl z-[100] overflow-y-auto scrollbar-hide border border-gray-100 ring-4 ring-black/5">
                    {options.map((option) => {
                        const displayName = option?.label || option;
                        const isAll = displayName === "Show All";
                        const typeConfig =
                            POKEMON_TYPES_CONFIG[displayName.toLowerCase()];
                        const Icon = typeConfig?.icon;

                        return (
                            <li
                                key={displayName}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 border-b border-gray-50 last:border-none capitalize hover:bg-bgPink hover:text-white flex items-center gap-2 cursor-pointer transition-colors font-semibold"
                            >
                                {Icon && !isAll && (
                                    <div
                                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 shadow-sm"
                                        style={{
                                            backgroundColor: typeConfig.color,
                                        }}
                                    >
                                        <Icon
                                            weight="duotone"
                                            size={14}
                                            className="text-white"
                                        />
                                    </div>
                                )}

                                <span className={isAll ? "opacity-50" : ""}>
                                    {isAll ? "Show All" : displayName}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
