import axios from "axios";

const API_URL = `https://pokeapi.co/api/v2/pokemon`;

export const getPokemon = async (idOrName) => {
    if (!idOrName) return null;

    const response = await axios.get(`${API_URL}/${idOrName}`);
    return response.data;
};
