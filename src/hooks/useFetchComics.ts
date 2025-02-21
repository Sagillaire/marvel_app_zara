import { useQuery } from "@tanstack/react-query";
import { fetchComicterByCharacterId } from "../services/fetchComicterByCharacterId";

export const useFetchComics = (id: number) => {
  return useQuery({
    queryKey: ["comics", id],
    queryFn: () => fetchComicterByCharacterId(id),
    enabled: !!id,
  });
};
