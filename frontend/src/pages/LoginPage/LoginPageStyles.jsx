import styled from "styled-components";
import { fadedBlack, aqua } from "../../components/styles/ComponentStyleConstants";

const LoginPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${fadedBlack};

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .username-input {
      margin-top: 10%;
    }

    label {
      color: ${aqua};
      font-family: Bangers, cursive;
      font-size: 2rem;
      margin: 2%;
      width: 40%;

      input {
        color: black;
        font-size: 1rem;
        text-align: center;
        height: 3vh;
        border-color: black;
        border-radius: 5px;
        width: 100%;
        outline: none;
      }
    }

    button {
      font-size: 1rem;
      border-color: black;
      border-radius: 5px;
      width: 10%;
      margin-bottom: 10%;
      outline: none;

      &:hover {
        cursor: pointer;
        color: white;
        background-color: ${fadedBlack};
      }
    }
  }

  a {
    width: 35%;
    margin: 0 auto;
    margin-bottom: 20%;

    button {
      width: 100%;
      font-size: 1rem;
      border-color: black;
      border-radius: 5px;
      outline: none;

      &:hover {
        cursor: pointer;
        color: white;
        background-color: ${fadedBlack};
      }
    }
  }
`

export default LoginPageStyles;
