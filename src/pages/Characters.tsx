import { Fragment } from "react";
import CharacterCard from "../ui/organisms/CharacterCard";
import Loading from "../ui/molecules/Loading";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import SearchBar from "../ui/molecules/SearchBar";
import {
  LoadingComicsContainer,
  MainContainer,
} from "../ui/styles/GlobalStyles";
import { CharacterCardProps } from "../ui/organisms/CharacterCard/interface";

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
            <CharacterCard data-testid="character-card" key={character?.id} {...character} />
          ))
        )}
      </MainContainer>
    </Fragment>
  );
}

export default Characters;
