import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSegmentCategory } from "../features/search/searchSlice";

import SearchBar from "../features/search/SearchBar";
import Dropdown from "./Dropdown";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const segmentOptions = ["Assembly", "Parliament", "District", "Mandal"];

function Header() {
  const defaultSegmentValue = useSelector(
    (state) => state.searchResults.segmentCategory
  );
  const selectedSegmentValue = useSelector(
    (state) => state.searchResults.segmentValue
  );
  const [selectedValue, setSelectedValue] = useState(defaultSegmentValue);
  const dispatch = useDispatch();

  const handleSelect = (value) => {
    setSelectedValue(value);
    dispatch(setSegmentCategory(value));
  };

  const searchBarPlaceHolder = `Search for your ${selectedValue}`;

  return (
    <StyledHeader>
      <Dropdown
        options={segmentOptions}
        onSelect={handleSelect}
        defaultValue={defaultSegmentValue}
      />
      <SearchBar searchBarPlaceHolder={searchBarPlaceHolder} />
      <span>{selectedSegmentValue}</span>
    </StyledHeader>
  );
}

export default Header;
