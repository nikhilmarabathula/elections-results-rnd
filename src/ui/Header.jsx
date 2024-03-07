import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedResult } from "../features/search/searchSlice";

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
    (state) => state.searchResults.defaultSegmentCategory
  );
  const selectedSegmentValue = useSelector(
    (state) => state.searchResults.selectedSegmentValue
  );
  const [selectedValue, setSelectedValue] = useState(defaultSegmentValue);
  const dispatch = useDispatch();

  const handleSelect = (value) => {
    setSelectedValue(value);
    const valueToBePlaced = getValueToBePlaced(value);
    dispatch(setSelectedResult(valueToBePlaced));
  };

  const getValueToBePlaced = (value) => {
    switch (value) {
      case "Assembly":
        return "Bhimavaram";
      case "Parliament":
        return "Narsapuram";
      case "District":
        return "West Godavari";
      case "Mandal":
        return "Veeravasaram";
      default:
        return "Bhimavaram";
    }
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
      <span>{selectedSegmentValue ?? "Test"}</span>
    </StyledHeader>
  );
}

export default Header;
