import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setSelectedResult } from "./searchSlice";

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
function SearchBarResultItem({ value, onItemSelected }) {
  const dispatch = useDispatch();

  function handleSelectedData(e) {
    dispatch(setSelectedResult(value.name));
    onItemSelected();
  }

  return (
    <StyledSearchBarResultItem onClick={handleSelectedData}>
      {value.name}
    </StyledSearchBarResultItem>
  );
}

export default SearchBarResultItem;

SearchBarResultItem.propTypes = {
  value: PropTypes.object,
};
