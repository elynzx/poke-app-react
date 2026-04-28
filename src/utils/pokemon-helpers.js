export const createPokemonProfile = (pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image:
        pokemon.sprites.other["home"].front_default ||
        pokemon.sprites.front_default,

    /*     image:
        pokemon.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
            ?.front_default ||
        pokemon.sprites?.other?.dream_world?.front_default ||
        pokemon.sprites?.other?.["official-artwork"]?.front_default ||
        pokemon.sprites?.front_default, */
    weight: pokemon.weight,
    height: pokemon.height,
    types: pokemon.types?.map((type) => type.type.name),
    abilities: pokemon.abilities?.map((ability) => ability.ability.name),
});
