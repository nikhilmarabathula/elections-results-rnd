import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(1) {
    flex: 1;
    padding-left: 2rem;
    padding-top: 1rem;
    /* padding-bottom: 1rem; */
    justify-content: flex-start;
  }

  &:nth-child(2) {
    flex: 2;
  }

  &:nth-child(3) {
    flex: 1;
    justify-content: flex-end;
    padding-right: 2rem;
    /* padding-bottom: 1rem; */
  }
`;

export default HeaderDiv;
