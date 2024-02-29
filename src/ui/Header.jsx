import styled from "styled-components";

import Input from "./Input";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: white;
  padding: 1rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  height: 6.4rem;

  display: flex;
  justify-content: space-around;
`;

const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Input type="searchbar" placeholder="Search for your assembly" />
      <StyledP>Kuppam</StyledP>
    </StyledHeader>
  );
}

export default Header;
