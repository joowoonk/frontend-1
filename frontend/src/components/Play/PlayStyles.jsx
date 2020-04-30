import styled from "styled-components";
import { button, songInfo } from "../styles/ComponentStyleConstants";

const PlayStyles = styled.div`
  ${songInfo};

  button {
    ${button};
    width: 100%;
    height: 5vh;
  }
`

export default PlayStyles;
