import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMarvelStore } from "../../../application/store/marvel_store";
import { useFetchCharacters } from "../../../hooks/useFetchCharacters";

export const useSearchBar = () => {
  const { setQuery } = useMarvelStore();
  const [input, setInput] = useState("");
  const { data: characters = [] } = useFetchCharacters();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    setInput(query);
  }, [query]);

  const updateSearch = useCallback(() => {
    const _query = input.trim() || null;
    setQuery(_query || "");
    setSearchParams(_query ? { query: _query } : {});
  }, [input, setQuery, setSearchParams]);

  useEffect(() => {
    const timeoutId = setTimeout(updateSearch, 1500);
    return () => clearTimeout(timeoutId);
  }, [updateSearch]);

  return { input, setInput, characters };
};
