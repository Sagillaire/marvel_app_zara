import { marvelAPi } from "./api";

/**
 * Fetches a list of characters from the Marvel API based on a search query.
 *
 * This function makes a GET request to the Marvel API to retrieve characters whose names start with the
 * provided `query`. If no query is provided, all characters are fetched with a limit of 50.
 *
 * @param query - A string to search for characters whose names start with the provided query.
 *               If empty, all characters will be fetched.
 * @returns A promise that resolves to an array of character objects from the API response.
 *          The characters are located in `response.data.data.results`.
 *
 * @throws An error if the request fails or no characters are found.
 */
export const fetchCharacters = async (query: string) => {
  const response = await marvelAPi.get("/characters", {
    params: {
      limit: 50,
      nameStartsWith: query || undefined,
    },
  });
  return response.data.data.results;
};
