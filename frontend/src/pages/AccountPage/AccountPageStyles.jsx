import styled from "styled-components";
import { inputField, button, accountForm } from "../../components/styles/ComponentStyleConstants.js";

const AccountPageStyles = styled.div`
  ${accountForm}

  label {
    ${inputField};
  }

  button {
    ${button};
  }
`

export default AccountPageStyles;
