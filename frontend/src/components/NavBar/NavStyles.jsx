import styled from "styled-components";
import { fadedBlack, babySeal, aqua } from "../styles/ComponentStyleConstants";

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: ${fadedBlack.background};
  opacity: ${fadedBlack.opacity};
  font-size: 1.5rem;

  h1 {
    color: ${aqua};
    font-family: Bangers, cursive;
    font-size: 5rem;
    margin: 2%;
  }

  .menuNav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    margin: 2%;

    a {
      color: ${aqua};
      text-decoration: none;
    }
  }
`

export default NavStyles;
