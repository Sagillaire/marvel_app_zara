import { Fragment } from "react";
import CharacterCard, { CharacterCardProps } from "./components/CharacterCard";
import Search from "./components/Search";
import { MainContainer } from "./GlobalStyles";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

function App() {
  const { data: characters = [], isLoading } = useFetchCharacters();

  return (
    <Fragment>
      <Search />
      <MainContainer>
        {isLoading ? (
          <h1>Loading characters...</h1>
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
