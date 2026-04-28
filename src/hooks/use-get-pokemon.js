import { useEffect, useState } from "react";
import { getPokemon } from "../services/get-pokemon";

import { usePokemonStore } from "../store/use-pokemon-store";
import { createPokemonProfile } from "../utils/pokemon-helpers";

export const useGetPokemon = (idOrName) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPokemonFromStore = usePokemonStore((state) => state.getPokemons);
    const addPokemons = usePokemonStore((state) => state.addPokemons);

    useEffect(() => {
        if (!idOrName) return;

        const cachedPokemon = getPokemonFromStore(idOrName);
        if (cachedPokemon) {
            setPokemon(cachedPokemon);
            setLoading(false);
            return;
        }
        setLoading(true);
        getPokemon(idOrName)
            .then(createPokemonProfile)
            .then((newProfile) => {
                setPokemon(newProfile);
                addPokemons([newProfile]);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [idOrName, getPokemonFromStore, addPokemons]);

    return { data: pokemon, loading, error };
};
