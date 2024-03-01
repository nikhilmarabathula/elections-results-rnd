import styled from "styled-components";

import HeaderDiv from "./HeaderDiv";
import Logo from "./Logo";
import Login from "./Login";
import SearchBar from "../features/search/SearchBar";
import { useSelector } from "react-redux";

const HeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-300);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <Logo />
      </HeaderDiv>
      <HeaderDiv>
        <SearchBar />
      </HeaderDiv>
      <HeaderDiv>
        <Login />
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
