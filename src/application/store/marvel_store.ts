import { create } from "zustand";
import { MarvelState } from "../../models/marvel_store.model";

export const useMarvelStore = create<MarvelState>((set) => ({
  query: "",
  favorites: [],
  setQuery: (query) => set({ query }),
  toggleFavorite: (id, name, url) =>
    set((state) => {
      const isFavorite = state.favorites.some((fav) => fav.id === id);
      return {
        favorites: isFavorite
          ? state.favorites.filter((fav) => fav.id !== id)
          : [...state.favorites, { id, name, url }],
      };
    }),
}));
