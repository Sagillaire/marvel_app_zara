import Search from "../../atoms/Search";
import { SearchContainer, SearchResults } from "./styled";
import { useSearchBar } from "./useSearchBar";

const SearchBar = () => {
  const { input, setInput, characters } = useSearchBar();

  return (
    <SearchContainer>
      <Search input={input} setInput={setInput} />
      <SearchResults>{characters.length || 0} RESULTS</SearchResults>
    </SearchContainer>
  );
};

export default SearchBar;
