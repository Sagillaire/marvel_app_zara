import { Fragment } from "react";
import CharacterCard, { CharacterCardProps } from "./components/CharacterCard";
import Loading from "./components/Loading";
import Search from "./components/Search";
import { LoadingComicsContainer, MainContainer } from "./GlobalStyles";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

function App() {
  const { data: characters = [], isLoading } = useFetchCharacters();

  return (
    <Fragment>
      <Search />
      <MainContainer>
        {isLoading ? (
          <LoadingComicsContainer>
            <Loading size={250} />
          </LoadingComicsContainer>
        ) : (
          characters.map((character: CharacterCardProps) => (
            <CharacterCard key={character?.id} {...character} />
          ))
        )}
      </MainContainer>
    </Fragment>
  );
}

export default App;
