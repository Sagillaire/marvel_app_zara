import { ComicsInterface } from "../models/comics.model";
import { marvelAPi } from "./api";

export const fetchComicterByCharacterId = async (id: number) => {
  const response = await marvelAPi.get(`/characters/${id}/comics`);
  return response.data.data.results as ComicsInterface[];
};
