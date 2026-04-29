import axios from "axios";
import { formatGenName } from "../utils";

const API_URL = `https://pokeapi.co/api/v2`;

export const getPokemonTypes = async () => {
    const response = await axios.get(`${API_URL}/type`);
    return response.data.results.map((type) => type.name);
};

export const getPokemonsByType = async (typeName) => {
    const response = await axios.get(`${API_URL}/type/${typeName}`);
    const pokemonsByType = response.data.pokemon;
    const pokemonNames = pokemonsByType.map((pokemon) => pokemon.pokemon.name);
    return pokemonNames;
};
