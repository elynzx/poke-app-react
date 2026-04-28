import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePaginationStore = create(
    persist(
        (set) => ({
            page: 1,
            limit: 10,
            setPage: (page) => set({ page }),
            setLimit: (limit) => set({ limit }),
            resetPagination: () => set({ page: 1 }),
        }),
        {
            name: "pokemon-pagination",
        },
    ),
);
