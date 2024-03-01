import styled from "styled-components";

const Img = styled.img`
  height: 4rem;
  width: 20rem;
`;

function Logo() {
  return <Img src="/logo-light-4.png" alt="Logo" />;
}

export default Logo;
