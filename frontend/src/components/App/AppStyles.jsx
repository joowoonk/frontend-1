import styled from "styled-components";
import img from "../../assets/DeepTunes-background.jpg";

const AppStyles = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  ${'' /* opacity: 0.5; */}
  ${'' /* backdrop-filter: blur(8px);
  -webkit-filter: blur(8px); */}
  width: 100%;
  height: 100%;
`

export default AppStyles;
