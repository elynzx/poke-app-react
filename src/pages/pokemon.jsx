import { Header } from "../components/header/header";
import { useGetPokemons } from "../hooks/use-get-pokemons";
import { ArrowRightBox, ArrowLeftBox, Search } from "pixelarticons/react";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { Pagination } from "../components/pagination/pagination";
import { usePaginationStore } from "../store/use-pagination-store";
import { PokemonCardSkeleton } from "../components/skeletons/pokemon-skeleton";
import { SearchBar } from "../components/search-bar/search-bar";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export function PokemonPage() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");
    const [debouncedSearch] = useDebounce(search, 600);

    const cleanSearch = debouncedSearch.replace(/\s+/g, "").toLowerCase();

    const page = usePaginationStore((state) => state.page);
    const limit = usePaginationStore((state) => state.limit);
    const setPage = usePaginationStore((state) => state.setPage);
    const resetPagination = usePaginationStore(
        (state) => state.resetPagination,
    );

    const offset = (page - 1) * limit;
    const isSearching = search.trim().length > 0;

    const { data, loading, error } = useGetPokemons(
        offset,
        limit,
        cleanSearch,
        type,
    );

    const handlePrevPage = () => setPage(Math.max(1, page - 1));
    const handleNextPage = () => setPage(page + 1);
    const resetPage = () => resetPagination();
    const handleSearchChange = (searchValue) => {
        setSearch(searchValue);
        resetPage();
    };

    const handleTypeChange = (typeValue) => {
        setType(typeValue);
        resetPage();
    };

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
            <SearchBar
                search={search}
                setSearch={handleSearchChange}
                setType={handleTypeChange}
            />
            <div className="flex-1 overflow-y-auto scrollbar-hide inset-shadow-sm inset-shadow-bgDarkGray">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 max-w-5xl mx-auto place-items-center">
                    {loading ? (
                        Array.from({ length: limit }).map((_, index) => (
                            <PokemonCardSkeleton key={index} />
                        ))
                    ) : data.length > 0 ? (
                        data?.map((pokemon) => (
                            <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col justify-center items-center py-25 mt-12">
                            <Search size={48} className="mb-4 opacity-20" />
                            <p className="font-item font-bold text-lg">
                                No Pokemon found
                            </p>
                            <p className="text-xs">
                                Try adjusting your search
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Pagination
                currentPage={page}
                firstPage={resetPage}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                isSearching={isSearching}
            />
        </div>
    );
}
