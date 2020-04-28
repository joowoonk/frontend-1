import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import { useHistory } from "react-router-dom";
// import axios from 'axios';
import * as yup from "yup";

import SignUpForm from "./SignUpForm.js";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

// const url = '';

const initFormValues = {
  //   firstName: "",
  //   lastName: "",
  username: "",
  //   email: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

const initFormErrors = {
  //   firstName: "",
  //   lastName: "",
  username: "",
  //   email: "",
  password: "",
  confirmPassword: "",
  terms: "",
};

const formSchema = yup.object().shape({
  //   firstName: yup.string().required("First name is required"),
  // .min(2)?
  //   lastName: yup.string().required("Last name is required"),
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must have a minimum of 3 characters"),
  //   email: yup
  //     .string()
  //     .required("Email is required")
  //     .email("Please enter a valid email address"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .test("match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

function SignUpPage() {
  const [users, setUsers] = useState([]);

  const [formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);

  const { push } = useHistory();
  //   console.log(formValues);
  // const postUser = user => {
  // 	axios.post(url)
  // 		.then(res => {
  // 			setUsers([...users, res.data]);
  // 		})
  // 		.catch(err => {
  // 			console.log('error from trying to post user');
  // 		})
  // }

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
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const name = evt.target.name;

    yup
      .reach(formSchema, name)
      .validate(evt.target.checked)
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
      [name]: evt.target.checked,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // setFormValues({ ...formValues });
    // console.log("Working", evt);

    if (
      formValues.password === formValues.confirmPassword &&
      formValues.terms
    ) {
      axiosWithAuth()
        .post("/auth/register", {
          username: formValues.username,
          password: formValues.password,
        })
        .then((res) => {
          console.log("testing", { res });
          push("/preference");
        })
        .catch((err) => console.log(err, "ERROR TO SIGN UP"));
    } else {
      return <div>Not Working</div>;
    }
    console.log("not working");
  };

  return (
    <div className="sign-up-page">
      <header className="sign-up-header">
        <NavBar />

        {/* <img src={logo} alt='website logo'/> */}
      </header>

      <SignUpForm
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        handleSubmit={handleSubmit}
        errors={formErrors}
      />
      <Link to="/login">
        <button>Already a [Project Name] User? Login Here</button>
      </Link>
    </div>
  );
}

export default SignUpPage;
