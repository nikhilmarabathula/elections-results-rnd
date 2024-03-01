import styled from "styled-components";

import HeaderDiv from "./HeaderDiv";
import Logo from "./Logo";
import Button from "./Button";

const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: white;
  display: flex;
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  min-width: 80%;
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
