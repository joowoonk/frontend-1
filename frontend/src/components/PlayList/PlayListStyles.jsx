import styled from "styled-components";
import { songList } from "../../components/styles/ComponentStyleConstants.js";

const PlayListStyles = styled.div`
  ${songList};

  .buttons {
    display: flex;
    flex-direction: column-reverse;
  }
`

export default PlayListStyles;
