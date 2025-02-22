import { SearchContent, SearchIcon, SearchInput } from "./SearchStyled";

interface Props {
  input: string;
  setInput: (payload: string) => void;
}

const Search = ({ input, setInput }: Props) => {
  return (
    <SearchContent>
      <SearchIcon src="/assets/search_icon.svg" alt="Search icon" />
      <SearchInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="SEARCH A CHARACTER"
      />
    </SearchContent>
  );
};

export default Search;
