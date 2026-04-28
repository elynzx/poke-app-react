import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePokemonStore = create(
    persist(
        (set, get) => ({
            pokemonList: [],

            addPokemons: (newPokemons) => {
                const currentPokemonList = get().pokemonList;
                const newPokemonsToAdd = newPokemons.filter(
                    (newPokemon) =>
                        !currentPokemonList.some(
                            (pokemonInList) =>
                                pokemonInList.id === newPokemon.id,
                        ),
                );
                if (newPokemonsToAdd.length > 0) {
                    set({
                        pokemonList: [
                            ...currentPokemonList,
                            ...newPokemonsToAdd,
                        ],
                    });
                }
            },

            getPokemons: (idOrName) => {
                return (
                    get().pokemonList.find(
                        (pokemon) =>
                            pokemon.name === idOrName ||
                            pokemon.id === Number(idOrName),
                    ) || null
                );
            },
        }),
        {
            name: "pokemon-store",
        },
    ),
);
