import { useQuery } from "@tanstack/react-query";
import { useMarvelStore } from "../application/store/marvel_store";
import { fetchCharacters } from "../application/services/fetchCharacters";

export const useFetchCharacters = () => {
  const { query } = useMarvelStore();

  return useQuery({
    queryKey: ["characters", query],
    queryFn: () => fetchCharacters(query),
  });
};
