import styled from "styled-components";
import { songList } from "../../components/styles/ComponentStyleConstants.js";

const AddNewSongsStyles = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* color: white; */}

  .song-list {
    ${songList};
  }
`

export default AddNewSongsStyles;
