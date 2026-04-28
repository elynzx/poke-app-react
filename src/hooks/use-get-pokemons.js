import { useEffect, useState } from "react";
import { getPokemonsList } from "../services/get-pokemon-list";
import { getPokemon } from "../services/get-pokemon";
import { usePokemonStore } from "../store/use-pokemon-store";
import { createPokemonProfile } from "../utils/pokemon-helpers";

export const useGetPokemons = (offset, limit, search) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addPokemons = usePokemonStore((state) => state.addPokemons);
    const getPokemonFromStore = usePokemonStore((state) => state.getPokemons);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const pokemonSearch = search?.toLowerCase().trim();

        if (pokemonSearch) {
            const cachedPokemon = getPokemonFromStore(pokemonSearch);
            
            if (cachedPokemon) {
                setPokemons([cachedPokemon]);
                setLoading(false);
                return;
            }
            getPokemon(pokemonSearch)
                .then(createPokemonProfile)
                .then((profile) => {
                    setPokemons([profile]);
                    addPokemons([profile]);
                })
                .catch(() => setPokemons([]))
                .finally(() => setLoading(false));
            return;
        }

        getPokemonsList(offset, limit)
            .then((response) =>
                Promise.all(
                    response.results.map((pokemon) => {
                        const cachedPokemon = getPokemonFromStore(pokemon.name);
                        if (cachedPokemon) return cachedPokemon;
                        return getPokemon(pokemon.name).then(
                            createPokemonProfile,
                        );
                    }),
                ),
            )
            .then((pokemonProfiles) => {
                setPokemons(pokemonProfiles);
                addPokemons(pokemonProfiles);
            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }, [offset, limit, search, addPokemons, getPokemonFromStore]);

    return {
        data: pokemons,
        search,
        loading,
        error,
    };
};
