import { Fragment } from "react";
import CharacterCard, { CharacterCardProps } from "../ui/organisms/CharacterCard";
import Loading from "../ui/molecules/Loading";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import SearchBar from "../ui/molecules/SearchBar";
import {
  LoadingComicsContainer,
  MainContainer,
} from "../ui/styles/GlobalStyles";

function Characters() {
  const { data: characters = [], isLoading } = useFetchCharacters();

  return (
    <Fragment>
      <SearchBar />
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

export default Characters;
