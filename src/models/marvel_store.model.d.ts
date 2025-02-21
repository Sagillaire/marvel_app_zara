export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

interface MarvelState {
  query: string;
  favorites: FavoriteCharacter[];
  setQuery: (query: string) => void;
  toggleFavorite: (id: number, name: string, url: string) => void;
}

interface FavoriteCharacter {
  id: number;
  url: string;
  name: string;
}
