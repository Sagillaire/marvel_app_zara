import { useMarvelStore } from "../application/store/marvel_store";
import CharacterCard from "../ui/organisms/CharacterCard";
import { MainContainer } from "../ui/styles/GlobalStyles";

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
      {!favorites.length ? (
        <p style={{ margin: "0 auto" }}>No tienes personajes favoritos.</p>
      ) : (
        newFavorites.map((character: any) => (
          <CharacterCard key={character?.id} {...character} />
        ))
      )}
    </MainContainer>
  );
};

export default Favorites;
