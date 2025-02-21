import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { useMarvelStore } from "../store/marvel_store";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: characters = [] } = useFetchCharacters();

  const query = searchParams.get("query");

  useEffect(() => {
    if (query) setInput(query);
  }, [query]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const _query = input.trim() || null;

      // Si el input está vacío, elimina el parámetro 'query'
      if (_query) {
        setQuery(_query);
        setSearchParams({ query: _query });
      } else {
        setQuery("");
        setSearchParams({});
      }
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [input, setQuery, setSearchParams]);

  return (
    <SearchContainer>
      <SearchContent>
        <SearchIcon src="/assets/search_icon.svg" alt="Search icon" />
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
