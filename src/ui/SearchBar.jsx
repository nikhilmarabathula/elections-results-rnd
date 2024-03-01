import { useState } from "react";
import styled from "styled-components";
import SearchBarContainer from "./SearchBarContainer";

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
  const [searchValue, setSearchValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const items = ["12", "13", "14", "15", "16", "17"];

  const filteredItems = searchValue
    ? items.filter((item) => item.includes(searchValue))
    : [];

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
          filteredItems={filteredItems}
          searchValue={searchValue}
        />
      )}
    </SearchBarDiv>
  );
}

export default SearchBar;
