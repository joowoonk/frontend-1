import styled from "styled-components";
import { aqua, bangers } from "../styles/ComponentStyleConstants";

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-evenly;

  background-color: black;
  font-size: 1.5rem;

  h1 {
    color: ${aqua};
    opacity: 1;
    font-family: ${bangers};
    font-size: 5rem;
    margin: 2%;
    letter-spacing: 0.3rem;
    text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 8px, #FFF 0px 0px 13px, #99299B 0px 0px 15px, #99299B 0px 0px 20px, #99299B 0px 0px 30px, #99299B 0px 0px 0px, #99299B 0px 0px 50px;
    }
  }

  .menuNav {
    opacity: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    margin: 2%;

    a {
      color: ${aqua};
      text-decoration: none;
      border-radius: 5px;
      width: 80%;
      text-align: center;
      padding: 1%;

      &:hover {
        color: black;
        background-color: ${aqua};
      }
    }
  }
`

export default NavStyles;
