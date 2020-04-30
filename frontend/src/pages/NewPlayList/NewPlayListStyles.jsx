import styled from "styled-components";
import { songList, songInfo, button } from "../../components/styles/ComponentStyleConstants.js";

const NewPlayListStyles = styled.div`
  ${songList};

  .song-card {
    ${songInfo};
  }

  .buttons {
    ${button};
  }
`

export default NewPlayListStyles;
