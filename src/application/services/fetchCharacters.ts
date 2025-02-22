import { marvelAPi } from "./api";

export const fetchCharacters = async (query: string) => {
  const response = await marvelAPi.get("/characters", {
    params: {
      limit: 50,
      nameStartsWith: query || undefined,
    },
  });
  return response.data.data.results;
};
