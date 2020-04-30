import styled from "styled-components";
import { songList, songInfo, button } from "../../components/styles/ComponentStyleConstants.js";

const NewPlayListStyles = styled.div`
  ${songList};

  .song-card {
    ${songInfo};

    h2 {
      width: 30%;
    }
  }

  .buttons {
    ${button};
    width: 10%;
  }
`

export default NewPlayListStyles;
