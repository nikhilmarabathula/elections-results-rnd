import styled from "styled-components";

const Img = styled.img`
  height: 2rem;
  width: 10rem;
  flex: 0 1 auto;

  @media (min-width: 992px) {
    /* Condition for screen size greater than 992px - md screen */
    height: 3rem;
    width: 15rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 1180px) {
    /* Condition for screen size greater than 1180px - lg screen */
    height: 4rem;
    width: 20rem;
  }
`;

function Logo() {
  return <Img src="/logo-light-4.png" alt="Logo" />;
}

export default Logo;
