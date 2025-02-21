import { marvelAPi } from "./api";

export const fetchCharacterById = async (id: number) => {
  const response = await marvelAPi.get(`/characters/${id}`);
  return response.data.data.results[0];
};
