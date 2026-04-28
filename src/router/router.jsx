import { createBrowserRouter } from "react-router";
import { Home } from "../app/home";
import { Pokemon } from "../app/pokemon";
import { PokemonProfile } from "../app/pokemon-profile";
import { RootLayout } from "../layouts/root-layout";
import { Favorites } from "../app/favorites";
import { Compare } from "../app/compare";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "pokemons",
                Component: Pokemon,
            },
            {
                path: "pokemons/:name",
                Component: PokemonProfile,
            },
            {
                path: "compare",
                Component: Compare,
            },
            {
                path: "favorites",
                Component: Favorites,
            },
        ],
    },
]);
