export type Favorite = { id: number };

export type CheckFavoriteColor = (favorites: Favorite[], id: string | number) => string;

export const getFavoriteColor: CheckFavoriteColor = (favorites, id) => {
    const numericId = Number(id);
    return favorites.some((fav) => fav.id === numericId) ? "#ec1d24" : "#FFFFFF";
};
