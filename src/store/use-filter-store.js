import { create } from "zustand";

export const useFilterStore = create((set) => ({
    types: [],
    setFilters: (types) => set({ types }),
}));
