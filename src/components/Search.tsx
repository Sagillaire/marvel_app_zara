import { useEffect, useState } from "react";
import { useCharacters, useMarvelStore } from "../store/marvel_store";
import {
  SearchContainer,
  SearchContent,
  SearchIcon,
  SearchInput,
  SearchResults,
} from "./SearchStyled";

const Search = () => {
  const { setQuery } = useMarvelStore();
  const [input, setInput] = useState("");
  const { data: characters = [] } = useCharacters();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQuery(input);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [input, setQuery]);

  return (
    <SearchContainer>
      <SearchContent>
        <SearchIcon src="/search_icon.svg" alt="Search icon" />
        <SearchInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="SEARCH A CHARACTER"
        />
      </SearchContent>
      <SearchResults>{characters.length || 0} RESULTS</SearchResults>
    </SearchContainer>
  );
};

export default Search;
