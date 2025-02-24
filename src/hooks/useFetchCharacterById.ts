import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById } from "../application/services/fetchCharacterById";

/**
 * Custom hook that fetches character data by ID using React Query.
 *
 * This hook calls the `fetchCharacterById` service and returns the result of the query.
 *
 * @param id - The unique identifier of the character to fetch.
 * @returns A React Query object containing the character data, status, and any error.
 *          The `enabled` option ensures the query is only executed if the `id` is valid (non-zero).
 */
export const useFetchCharacterById = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id,
  });
};
