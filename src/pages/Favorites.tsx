import CharacterCard from "../components/CharacterCard";
import { MainContainer } from "../GlobalStyles";
import { useMarvelStore } from "../store/marvel_store";

const Favorites = () => {
  const { favorites } = useMarvelStore();
  const newFavorites = favorites.map((favorite) => ({
    id: favorite?.id,
    name: favorite?.name,
    thumbnail: {
      path: favorite?.url,
      extension: "jpg",
    },
  }));

  return (
    <MainContainer>
      {!favorites ? (
        <h1>No tienes personajes favoritos.</h1>
      ) : (
        newFavorites.map((character) => (
          <CharacterCard key={character?.id} {...character} />
        ))
      )}
    </MainContainer>
  );
};

export default Favorites;
