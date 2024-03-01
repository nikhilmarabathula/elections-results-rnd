import { useState } from "react";
import styled from "styled-components";

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

const Container = styled.div`
  position: absolute;
  top: calc(100%);
  left: 0;
  width: 100%;
  height: "auto"; // Example fallback height
  overflow: hidden;
  border: 1px solid var(--color-grey-300) !important;
  border-top: 1px solid var(--color-grey-300) !important;
  border-bottom-left-radius: var(--border-radius-xl);
  border-bottom-right-radius: var(--border-radius-xl);
  z-index: 1;
`;

const SearchBarDiv = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSearchBarResultItem = styled.li`
  height: 5rem;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 2%;

  &:hover {
    background-color: #f0f8ff; /* Light blue color */
    cursor: pointer;
  }
`;

// eslint-disable-next-line react/prop-types
const SearchBarResultItem = ({ value }) => {
  return <StyledSearchBarResultItem>{value}</StyledSearchBarResultItem>;
};

const StyledSearchResultMessage = styled.span`
  height: 5rem;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 2%;
`;

function SearchBar() {
  const [searchValue, setSearchValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const items = ["12", "13"];

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
        <Container>
          {filteredItems.length > 0 ? (
            <>
              <ul>
                {filteredItems.map((item) => (
                  <SearchBarResultItem value={item} key={item} />
                ))}
              </ul>
              <StyledSearchResultMessage>
                Found {filteredItems.length} result
                {filteredItems.length !== 1 ? "s" : ""}
              </StyledSearchResultMessage>
            </>
          ) : (
            searchValue &&
            searchValue.length > 0 && (
              <StyledSearchResultMessage>
                No results found
              </StyledSearchResultMessage>
            )
          )}
        </Container>
      )}
    </SearchBarDiv>
  );
}

export default SearchBar;
