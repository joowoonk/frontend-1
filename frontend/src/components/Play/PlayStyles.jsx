import styled from "styled-components";
import { button, songInfo } from "../styles/ComponentStyleConstants";

const PlayStyles = styled.div`
  ${songInfo};

  ${'' /* .buttons {
    display: flex;
    flex-direction: column-reverse;
  } */}

  button {
    ${button};
    width: 100%;
    height: 5vh;
  }
`

export default PlayStyles;
