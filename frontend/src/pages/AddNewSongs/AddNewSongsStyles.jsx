import styled from "styled-components";
import { songList, songInfo } from "../../components/styles/ComponentStyleConstants.js";

const AddNewSongsStyles = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* color: white; */}

  .song-list {
    ${songList};
  }

  .song-card {
    ${songInfo};
  }
`

export default AddNewSongsStyles;
