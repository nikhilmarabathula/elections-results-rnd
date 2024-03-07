import styled from "styled-components";

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

function Header() {
  const options = ["Assembly", "Parliament", "District", "Mandal"];
  return (
    <StyledHeader>
      <Dropdown options={options} />
      <SearchBar />
      <span>Selected value</span>
    </StyledHeader>
  );
}

export default Header;
