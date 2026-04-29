import { useEffect, useState } from "react";
import { getPokemonTypes } from "../services/get-filters";
import { useFilterStore } from "../store/use-filter-store";

export const useGetFilters = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const types = useFilterStore((state) => state.types);
    const setFilters = useFilterStore((state) => state.setFilters);

    useEffect(() => {
        setLoading(true);
        setError(null);
        if (types.length > 0) {
            setLoading(false);
            return;
        }

        Promise.all([getPokemonTypes()])
            .then(([typesData]) => {
                setFilters(typesData);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }, [types.length, setFilters]);

    return { types, loading, error };
};
