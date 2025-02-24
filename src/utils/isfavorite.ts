export type Favorite = { id: number };

export type CheckFavoriteColor = (favorites: Favorite[], id: string | number) => string;

/**
 * Determines the color associated with a given favorite ID.
 *
 * @param favorites - An array of favorite objects containing an `id` property.
 * @param id - The ID to check, which can be a number or a string that represents a number.
 * @returns The color `#ec1d24` if the ID is found in the favorites array, otherwise `#FFFFFF`.
 */
export const getFavoriteColor: CheckFavoriteColor = (favorites, id) => {
    const numericId = Number(id);
    return favorites.some((fav) => fav.id === numericId) ? "#ec1d24" : "#FFFFFF";
};
