import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById } from "../services/fetchCharacterById";

export const useFetchCharacterById = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id,
  });
};
