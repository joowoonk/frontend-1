import React from "react";

function LoginForm(props) {
  const { values, onInputChange, handleSubmit, errors } = props;

  return (
    <form className="login-form">
      <label className="username-input">
        Username{" "}
        {<p>{errors.username}</p>}
        <input
          value={values.username}
          onChange={onInputChange}
          name="username"
          type="text"
        />
      </label>
      <label className="password-input">
        Password{" "}
        {<p>{errors.password}</p>}
        <input
          value={values.password}
          onChange={onInputChange}
          name="password"
          type="password"
        />
      </label>
      <button onClick={handleSubmit} name="login">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
