import { useQuery } from "@tanstack/react-query";
import { fetchComicterByCharacterId } from "../application/services/fetchComicterByCharacterId";

/**
 * Custom hook that fetches a list of comics related to a specific character by ID.
 *
 * This hook calls the `fetchComicterByCharacterId` service with the character's ID and
 * returns the result of the query. The query is only enabled if the `id` is valid (non-zero).
 *
 * @param id - The unique identifier of the character whose comics are to be fetched.
 * @returns A React Query object containing the comics data, status, and any error.
 *          The `enabled` option ensures the query is only executed if the `id` is valid (non-zero).
 */
export const useFetchComics = (id: number) => {
  return useQuery({
    queryKey: ["comics", id],
    queryFn: () => fetchComicterByCharacterId(id),
    enabled: !!id,
  });
};
