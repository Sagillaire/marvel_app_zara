import { useQuery } from "@tanstack/react-query";
import { fetchComicterByCharacterId } from "../application/services/fetchComicterByCharacterId";

export const useFetchComics = (id: number) => {
  return useQuery({
    queryKey: ["comics", id],
    queryFn: () => fetchComicterByCharacterId(id),
    enabled: !!id,
  });
};
