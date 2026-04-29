import { useEffect, useState } from "react";
import { getPokemonsList } from "../services/get-pokemon-list";
import { getPokemon } from "../services/get-pokemon";
import { usePokemonStore } from "../store/use-pokemon-store";
import { createPokemonProfile } from "../utils/pokemon-helpers";
import { getPokemonsByType } from "../services/get-filters";

export const useGetPokemons = (offset, limit, search, type) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addPokemons = usePokemonStore((state) => state.addPokemons);
    const getPokemonFromStore = usePokemonStore((state) => state.getPokemons);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const resolveProfiles = (pokemonNames) => {
            return Promise.all(
                pokemonNames.map((name) => {
                    const cachedPokemon = getPokemonFromStore(name);
                    return (
                        cachedPokemon ||
                        getPokemon(name).then(createPokemonProfile)
                    );
                }),
            );
        };

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

        if (type && type !== "all") {
            getPokemonsByType(type)
                .then((pokemonNames) => {
                    const pagedPokemonNames = pokemonNames.slice(
                        offset,
                        offset + limit,
                    );
                    return Promise.all(
                        pagedPokemonNames.map((name) => {
                            const cachedPokemon = getPokemonFromStore(name);
                            return (
                                cachedPokemon ||
                                getPokemon(name).then(createPokemonProfile)
                            );
                        }),
                    );
                })
                .then((profiles) => {
                    setPokemons(profiles);
                    addPokemons(profiles);
                })
                .catch(() => setPokemons([]))
                .finally(() => setLoading(false));
            return;
        }

        getPokemonsList(offset, limit)
            .then((response) => {
                const pokemonNames = response.results.map(
                    (pokemon) => pokemon.name,
                );
                return resolveProfiles(pokemonNames)
            })
            .then((pokemonProfiles) => {
                setPokemons(pokemonProfiles);
                addPokemons(pokemonProfiles);
            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }, [offset, limit, search, type, addPokemons, getPokemonFromStore]);

    return {
        data: pokemons,
        search,
        loading,
        error,
    };
};
