import styled, { css } from "styled-components";

const searchBarCss = css`
  // width: 100rem;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);

  flex: 0 1 auto;
  width: 100px;
  height: 100px;
  margin-left: auto;

  ${(props) => props.type === "searchbar" && searchBarCss}
`;

export default Input;
