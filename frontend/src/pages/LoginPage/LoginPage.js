import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as yup from "yup";

import LoginForm from "./LoginForm.js";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import { useHistory } from "react-router-dom";

const initFormValues = {
  username: "",
  password: "",
};

const initFormErrors = {
  username: "",
  password: "",
};

const formSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

function LoginPage() {
  const [formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const { push } = useHistory();

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/auth/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/usersonglist");
      });
  };

  return (
    <div className="login-page">
      <header className="login-page-header"></header>

      <LoginForm
        values={formValues}
        onInputChange={onInputChange}
        handleSubmit={handleSubmit}
        errors={formErrors}
      />
      <Link to="/signup">
        <button>Don't Have a [Project Name] Account? Sign Up Here</button>
      </Link>
    </div>
  );
}

export default LoginPage;
