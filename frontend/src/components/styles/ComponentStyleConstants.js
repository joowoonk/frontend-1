import { css } from "styled-components";

export const fadedBlack = "rgba(0, 0, 0, 0.5)";
export const babySeal = "#709689";
export const aqua = "#7fffd4";
export const bangers = "Bangers, cursive";
export const button = css`
  font-size: 1rem;
  ${'' /* border-color: ${aqua}; */}
  border-color: black;
  border-radius: 5px;
  outline: none;
  background-color: white;
  color: black;
  height: 6vh;
  width: 15%;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${fadedBlack};
    border-color: ${aqua};
  }
`
export const inputField = css`
    color: ${aqua};
    font-family: ${bangers};
    letter-spacing: 0.3rem;
    font-size: 2rem;
    margin: 2%;
    width: 60%;
    border: 3px solid ${aqua};
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    padding: 2%;

    p {
      font-size: 0.8rem;
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }

    input {
      color: white;
      font-size: 1.5rem;
      text-align: center;
      height: 3vh;
      border-color: white;
      border-radius: 5px;
      width: 100%;
      outline: none;
      background-color: black;
      border: 2px solid white;
      padding: 4%;
    }
`
export const songList = css`
  width: 80%;
  margin: 2% auto;
`
export const songInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  border: 2px solid ${aqua};
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 2%;
  margin-bottom: 2%;

  h2 {
    padding: 2%;
    width: 30%;
  }
`
// export const accountForm = css`
//   display: flex;
//   flex-direction: column;
//
//   .username-input {
//     margin-top: 10%;
//   }
//
//   form {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//
//     label {
//       ${inputField};
//     }
//
//     button {
//       ${button};
//       width: 10%;
//       margin: 2% 0% 8%;
//       height: 6vh;
//     }
//   }
// `
