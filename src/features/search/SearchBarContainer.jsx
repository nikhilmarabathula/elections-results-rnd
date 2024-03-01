import styled from "styled-components";
import SearchBarResultItem from "./SearchBarResultItem";

import PropTypes from "prop-types";

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
  /* z-index: 1; */
`;

const StyledSearchResultMessage = styled.span`
  height: 5rem;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 2%;
`;

function SearchBarContainer({ filteredItems, searchValue, onItemSelected }) {
  return (
    <Container
      onMouseDown={(e) => e.preventDefault()}
      onClick={(e) => e.stopPropagation()}
    >
      {filteredItems.length > 0 ? (
        <>
          <ul>
            {filteredItems.map((item) => (
              <SearchBarResultItem
                value={item}
                key={item.id}
                onItemSelected={onItemSelected}
              />
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
  );
}

SearchBarContainer.propTypes = {
  filteredItems: PropTypes.array,
  searchValue: PropTypes.string,
  onItemSelected: PropTypes.func,
};

export default SearchBarContainer;
