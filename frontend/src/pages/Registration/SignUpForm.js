import React from "react";

function SignUpForm(props) {
  //   console.log(props);
  const {
    values,
    onInputChange,
    onCheckboxChange,
    handleSubmit,
    errors,
  } = props;

  return (
    <>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="errors">
          {/* {<p>{errors.firstName}</p>} */}
          {/* {<p>{errors.lastName}</p>} */}
          {<p>{errors.username}</p>}
          {/* {<p>{errors.email}</p>} */}
          {<p>{errors.password}</p>}
          {/* {<p>{errors.}</p>} */}
          {<p>{errors.terms}</p>}
        </div>
        {/* <label>
        First Name -{" "}
        <input
          value={values.firstName}
          onChange={onInputChange}
          name="firstName"
          type="text"
        />
      </label>
      <label>
        Last Name -{" "}
        <input
          value={values.lastName}
          onChange={onInputChange}
          name="lastName"
          type="text"
        />
      </label> */}
        <label>
          Username -{" "}
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        {/* <label>
        Email -{" "}
        <input
          value={values.email}
          onChange={onInputChange}
          name="email"
          type="email"
        />
      </label> */}
        {/* maybe dropdown for birthday */}
        <label>
          Password -{" "}
          <input
            value={values.password}
            onChange={onInputChange}
            name="password"
            type="password"
          />
        </label>
        <label>
          Confirm Password -{" "}
          <input
            value={values.confirmPassword}
            onChange={onInputChange}
            name="confirmPassword"
            type="password"
          />
        </label>
        <label>
          Terms and Conditions -{" "}
          <input
            value={values.terms}
            onChange={onCheckboxChange}
            name="terms"
            type="checkbox"
          />
        </label>
        <button name="submit">Create Account</button>
      </form>
    </>
  );
}

export default SignUpForm;
