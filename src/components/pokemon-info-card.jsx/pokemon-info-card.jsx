import { POKEMON_TYPES_CONFIG } from "../../utils/pokemon-colors";

const DataRow = ({ label, value }) => (
    <div className="flex flex-col py-2 border-b border-bgLightGray/40 last:border-0">
        <span className="text-[10px] uppercase tracking-widest text-bgDarkGray/40 font-black mb-1">
            {label}
        </span>
        <span className="text-sm text-bgDarkGray font-bold capitalize leading-tight">
            {value}
        </span>
    </div>
);

export const PokemonInfoCard = ({
    height,
    weight,
    types,
    abilities,
    themeColor,
}) => {
    const pokemonHeightInCm = `${height * 10} cm`;
    const pokemonWeightInKg = `${weight / 10} kg`;
    const abilitiesNames = abilities.join(", ");
    const typeNames = types.join(" / ");

    const pokemonTypeBadges = types.map((typeName) => ({
        name: typeName,
        color: POKEMON_TYPES_CONFIG[typeName]?.color || "#F3F4F6",
    }));

    return (
        <div className="w-full md:max-w-[320px] bg-white rounded-2xl px-5 py-7 md:p-8 shadow-xl flex flex-col border-2 border-bgDarkGray ">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-bgLightGray/30">
                <div
                    className="w-2 h-6 rounded-full"
                    style={{ backgroundColor: themeColor }}
                ></div>
                <h2 className="text-xs font-black text-bgDarkGray uppercase tracking-[0.25em]">
                    Pokemon Data
                </h2>
            </div>

            <div className="grid grid-cols-1">
                <DataRow label="Type" value={typeNames} />
                <div className="grid grid-cols-2 gap-4">
                    <DataRow label="Height" value={pokemonHeightInCm} />
                    <DataRow label="Weight" value={pokemonWeightInKg} />
                </div>
                <DataRow label="Abilities" value={abilitiesNames} />
            </div>

            <div className="mt-6 pt-4 border-t-2 border-bgLightGray/30 flex gap-3 justify-center">
                {pokemonTypeBadges.map((badge) => (
                    <span
                        key={badge.name}
                        className="px-5 py-1 rounded-md text-[10px] font-black text-white uppercase tracking-widest"
                        style={{ 
                            backgroundColor: badge.color,
                            boxShadow: `0 4px 10px ${badge.color}40`
                        }}
                    >
                        {badge.name}
                    </span>
                ))}
            </div>
        </div>
    );
};
