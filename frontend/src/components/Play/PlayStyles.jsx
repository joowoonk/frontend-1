import styled from "styled-components";
import { button, songInfo } from "../styles/ComponentStyleConstants";

const PlayStyles = styled.div`
  ${songInfo};

  button {
    ${button};
  }
`

export default PlayStyles;
