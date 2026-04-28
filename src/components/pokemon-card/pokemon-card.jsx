import { useNavigate } from "react-router";
import { POKEMON_TYPES_CONFIG } from "../../utils/pokemon-colors";

export const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();
    const { id, name, image, types } = pokemon;
    const mainType = types[0];
    const typeConfig =
        POKEMON_TYPES_CONFIG[mainType] || POKEMON_TYPES_CONFIG.normal;
    const Icon = typeConfig.icon;
    const themeColor = typeConfig.color;
    const formattedId = `#${id.toString().padStart(3, "0")}`;

    return (
        <div className="relative w-42 h-60 flex flex-col items-center justify-end group">
            <div className="absolute -top-4 z-10 w-full h-38 flex justify-center items-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
                <img
                    src={image}
                    alt={name}
                    className="h-full object-contain drop-shadow-[0_6px_7px_rgba(0,0,0,0.3)]"
                />
            </div>

            <div
                onClick={() => navigate(`/pokemons/${pokemon.name}`)}
                className="relative w-full h-35 pb-6 flex flex-col items-center justify-end bg-white/20 backdrop-blur-md border border-white/50 rounded-b-xl  rounded-t-4xl shadow-2xs shadow-white transition-all duration-300 group-hover:bg-white/40 cursor-pointer"
            >
                <div className="flex flex-col items-center text-bgDarkGray text-center px-2">
                    <span className="text-[10px] font-bold opacity-50">
                        {formattedId}
                    </span>
                    <h2 className="capitalize font-semibold text-xs leading-tight">
                        {name}
                    </h2>
                    <div
                        className="text-[9px] text-white px-3 py-1 mt-3 rounded-md font-bold uppercase flex gap-1.5"
                        style={{
                            backgroundColor: typeConfig.color,
                            boxShadow: `0 4px 15px ${typeConfig.color}60`,
                        }}
                    >
                        <Icon weight="fill" size={12} className="text-white" />
                        <span>{mainType}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
