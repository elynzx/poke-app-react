import { createBrowserRouter } from "react-router";
import { Home } from "../app/home";
import { Pokemon } from "../app/pokemon";
import { PokemonProfile } from "../app/pokemon-profile";
import { RootLayout } from "../layouts/root-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Pokemon,
            },
            {
                path: "pokemons",
                Component: Pokemon,
            },
            {
                path: "pokemons/:name",
                Component: PokemonProfile,
            },
        ],
    },
]);
