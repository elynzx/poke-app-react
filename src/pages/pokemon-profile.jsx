import { useParams, useNavigate } from "react-router";
import { useGetPokemon } from "../hooks/use-get-pokemon";
import { ArrowLeft } from "pixelarticons/react";
import { PokemonHero } from "../components/pokemon-hero/pokemon-hero";
import { PokemonInfoCard } from "../components/pokemon-info-card.jsx/pokemon-info-card";

import { POKEMON_TYPES_CONFIG } from "../utils/pokemon-colors";

export function PokemonProfilePage() {
    const { name: pokemonName } = useParams();
    const navigate = useNavigate();
    const { data: pokemon, loading, error } = useGetPokemon(pokemonName);

    if (loading || !pokemon)
        return (
            <div className="p-10 font-item text-bgDarkPink italic">
                Loading...
            </div>
        );

    const { id, name, image, types, height, weight, abilities } = pokemon;
    const mainType = types[0];

    const themeColor = POKEMON_TYPES_CONFIG[mainType]?.color || "#F3F4F6";

    const gradientStyle = {
        backgroundImage: `linear-gradient(135deg, #FBEDF4 0%, #FEE2EE 40%, ${themeColor} 100%)`,
    };

    return (
        <div
            style={gradientStyle}
            className="flex-1 w-full rounded-t-xl overflow-y-auto flex flex-col relative font-item scrollbar-hide inset-shadow-sm inset-shadow-bgDarkGray"
        >
            <div className="relative font-item text-[12px] h-20 md:h-22 px-4 md:px-16 bg-bgDarkGray w-full">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-1/2 -translate-y-1/2 left-8 z-30 flex items-center gap-2 text-white/70 hover:text-white hover:scale-110 transition-transform cursor-pointer text-xs font-bold uppercase"
                >
                    <ArrowLeft size={20} /> Back
                </button>
            </div>
            <div className="flex-1 w-full flex items-center justify-center p-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-18 w-full fade-in-up">
                    <PokemonHero id={id} name={name} imageUrl={image} />
                    <PokemonInfoCard
                        height={height}
                        weight={weight}
                        types={types}
                        abilities={abilities}
                        themeColor={themeColor}
                        mainType={mainType}
                    />
                </div>
            </div>
        </div>
    );
}
