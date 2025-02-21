import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/fetchCharacters";
import { useMarvelStore } from "../store/marvel_store";

export const useFetchCharacters = () => {
  const { query } = useMarvelStore();

  return useQuery({
    queryKey: ["characters", query],
    queryFn: () => fetchCharacters(query),
  });
};
