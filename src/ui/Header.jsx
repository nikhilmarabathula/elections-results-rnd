import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 1rem 1rem;
  height: 4rem;
  background-color: var(--color-grey-100);

  @media (min-width: 992px) {
    height: 5rem;
  }

  @media (min-width: 1180px) {
    height: 6.4rem;
  }
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  max-width: 20rem;
  font-size: 1rem;

  flex: 0 1 auto;
  margin-left: auto;

  @media (min-width: 992px) {
    min-width: 35rem;
    display: block;
    font-size: 1.8rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      {<StyledInput type="searchbar" placeholder="Search for your assembly" />}
    </StyledHeader>
  );
}

export default Header;
