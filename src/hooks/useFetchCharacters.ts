import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../application/services/fetchCharacters";
import { useMarvelStore } from "../application/store/marvel_store";

/**
 * Custom hook that fetches a list of characters based on the current query.
 *
 * This hook retrieves the `query` from the `marvelStore` and uses it to fetch characters
 * with the `fetchCharacters` service. It returns the result of the React Query hook.
 *
 * @returns A React Query object containing the list of characters, status, and any error.
 *          The query is based on the current `query` state from the store.
 */
export const useFetchCharacters = () => {
  const { query } = useMarvelStore();

  return useQuery({
    queryKey: ["characters", query],
    queryFn: () => fetchCharacters(query),
  });
};
