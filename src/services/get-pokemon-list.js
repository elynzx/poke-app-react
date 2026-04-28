import axios from "axios";

const API_URL = `https://pokeapi.co/api/v2/pokemon`;
export const getPokemonsList = async (offset = 0, limit) => {
    const response = await axios.get(API_URL, {
        params: {
            offset,
            limit,
        },
    });

    return response.data;
};
