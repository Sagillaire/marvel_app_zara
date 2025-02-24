import { ComicsInterface } from "../../models/comics.model";
import { marvelAPi } from "./api";

/**
 * Fetches a list of comics related to a specific character by its ID from the Marvel API.
 *
 * This function makes a GET request to the Marvel API to retrieve the list of comics for the specified
 * character, identified by the `id`. It returns the comics in the form of an array of objects conforming
 * to the `ComicsInterface` model.
 *
 * @param id - The unique identifier of the character whose comics are to be fetched.
 * @returns A promise that resolves to an array of comic objects associated with the character.
 *          The comics are located in `response.data.data.results` and are cast to `ComicsInterface[]`.
 *
 * @throws An error if the request fails or no comics are found for the character.
 */
export const fetchComicterByCharacterId = async (id: number) => {
  const response = await marvelAPi.get(`/characters/${id}/comics`);
  return response.data.data.results as ComicsInterface[];
};
