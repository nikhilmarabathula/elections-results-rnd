import styled from "styled-components";
import { useState } from "react";

import HeaderDiv from "./HeaderDiv";
import Logo from "./Logo";
import Button from "./Button";

const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-100);
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-100);
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
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }
`;

const Container = styled.div`
  position: absolute;
  top: calc(100%);
  left: 0;
  width: 100%;
  height: 200px;
  /* background-color: red; */
  border: 1px solid red;
  border-top: none;
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

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <HeaderContainer>
      <HeaderDiv>
        <Logo />
      </HeaderDiv>
      <HeaderDiv>
        <SearchBarDiv>
          <StyledInput
            type="searchbar"
            placeholder="Search for your assembly"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {isFocused && <Container />}
        </SearchBarDiv>
      </HeaderDiv>
      <HeaderDiv>
        <Button variation="primary">Login</Button>
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
