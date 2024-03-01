import { useState } from "react";
import styled from "styled-components";
import SearchBarContainer from "./SearchBarContainer";
import useSearch from "../../hooks/useSearch";

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-300);
  border-radius: var(--border-radius-xl);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--color-grey-300);
    box-shadow: var(--shadow-sm);
    background-color: var(--color-grey-0);
    height: 90%;
    align-self: flex-end;
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const SearchBarDiv = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const { searchValue, setSearchValue, filteredResults } = useSearch();

  return (
    <SearchBarDiv>
      <StyledInput
        type="searchbar"
        placeholder="Search for your assembly"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {isFocused && (
        <SearchBarContainer
          filteredItems={filteredResults}
          searchValue={searchValue}
        />
      )}
    </SearchBarDiv>
  );
}

export default SearchBar;
