import styled from "styled-components";
import { aqua, button } from "../../components/styles/ComponentStyleConstants";

const LoginPageStyles = styled.div`
  display: flex;
  flex-direction: column;

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
      ${button}
      width: 10%;
      margin: 2% 0% 10%;

      }
    }
  }

  a {
    width: 35%;
    margin: 0 auto;
    margin-bottom: 20%;

    button {
      ${button}
      width: 100%;
    }
  }
`

export default LoginPageStyles;
