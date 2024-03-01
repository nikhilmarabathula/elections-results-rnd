import styled from "styled-components";

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

  &:last-child {
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

// eslint-disable-next-line react/prop-types
const SearchBarResultItem = ({ value }) => {
  return <StyledSearchBarResultItem>{value}</StyledSearchBarResultItem>;
};

export default SearchBarResultItem;
