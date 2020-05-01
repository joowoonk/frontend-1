import styled from "styled-components";
import { inputField, button } from "../../components/styles/ComponentStyleConstants.js";

const AccountPageStyles = styled.div`
  display: flex;
  flex-direction: column;

  .username-input {
    margin-top: 10%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label {
    ${inputField};
  }

  button {
    ${button};
    margin-top: 2%;
    margin-bottom: 10%;
  }
`

export default AccountPageStyles;
