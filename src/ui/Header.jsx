import styled from "styled-components";

import HeaderDiv from "./HeaderDiv";
import Logo from "./Logo";
import Button from "./Button";

const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: white;
  display: flex;
  border-bottom: 1px solid var(--color-grey-100);
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-xl);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  min-width: 80%;

  &:focus {
    outline: none;
    border-color: var(--color-grey-300);
    box-shadow: var(--shadow-sm);
    background-color: var(--color-grey-0);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <Logo />
      </HeaderDiv>
      <HeaderDiv>
        <StyledInput type="searchbar" placeholder="Search for your assembly" />
      </HeaderDiv>
      <HeaderDiv>
        <Button variation="primary">Login</Button>
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
