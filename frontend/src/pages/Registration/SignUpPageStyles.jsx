import styled from "styled-components";
import { button, inputField } from "../../components/styles/ComponentStyleConstants";

const SignUpPageStyles = styled.div`
  display: flex;
  flex-direction: column;

  .sign-up-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .username-input {
    margin-top: 10%;
  }

  label {
    ${inputField};
  }

  button {
    ${button};
  }

  a {
    width: 35%;
    margin: 0 auto;
    margin-bottom: 20%;

    button {
      ${button};
    }
  }
`

export default SignUpPageStyles;
