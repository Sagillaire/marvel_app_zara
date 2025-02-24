import { marvelAPi } from "./api";

/**
 * Fetches character data by its ID from the Marvel API.
 *
 * This function makes a GET request to the Marvel API using the character's ID and returns the first result
 * from the API response.
 *
 * @param id - The unique identifier of the character to fetch.
 * @returns A promise that resolves to the character data object from the API response.
 *          The character's details are located in `response.data.data.results[0]`.
 *
 * @throws An error if the request fails or the character is not found.
 */
export const fetchCharacterById = async (id: number) => {
  const response = await marvelAPi.get(`/characters/${id}`);
  return response.data.data.results[0];
};
