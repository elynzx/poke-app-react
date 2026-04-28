import { Header } from "../components/header/header";
import { useGetPokemons } from "../hooks/use-get-pokemons";
import { ArrowRightBox, ArrowLeftBox } from "pixelarticons/react";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { Pagination } from "../components/pagination/pagination";
import { usePaginationStore } from "../store/use-pagination-store";
import { PokemonCardSkeleton } from "../components/skeletons/pokemon-skeleton";
import { SearchBar } from "../components/search-bar/search-bar";
import { useState } from "react";

export function PokemonPage() {
    const [search, setSearch] = useState("");
    const page = usePaginationStore((state) => state.page);
    const limit = usePaginationStore((state) => state.limit);
    const setPage = usePaginationStore((state) => state.setPage);
    const resetPagination = usePaginationStore(
        (state) => state.resetPagination,
    );

    const offset = (page - 1) * limit;
    const { data, loading, error } = useGetPokemons(offset, limit, search);

    const handlePrevPage = () => setPage(Math.max(1, page - 1));
    const handleNextPage = () => setPage(page + 1);
    const resetPage = () => resetPagination();

    if (error) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center w-full bg-linear-to-b from-bgPink to-bgGreen rounded-t-xl">
                <h2 className="text-center font-item font-bold text-bgDarkGray animate-pulse">
                    An error ocurred.
                </h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full w-full rounded-t-xl overflow-hidden">
                <SearchBar search={search} setSearch={setSearch} />
            <div className="flex-1 overflow-y-auto scrollbar-hide inset-shadow-sm inset-shadow-bgDarkGray">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6 max-w-7xl mx-auto place-items-center">
                    {loading
                        ? Array.from({ length: limit }).map((_, index) => (
                              <PokemonCardSkeleton key={index} />
                          ))
                        : data?.map((pokemon) => (
                              <PokemonCard
                                  key={pokemon.name}
                                  pokemon={pokemon}
                              />
                          ))}
                </div>
            </div>

            <Pagination
                currentPage={page}
                firstPage={resetPage}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
            />
        </div>
    );
}
