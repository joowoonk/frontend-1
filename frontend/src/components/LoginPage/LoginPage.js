import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';
import * as yup from 'yup';

import LoginForm from './LoginForm.js';

const initFormValues = {
	username: '',
	password: ''
}

const initFormErrors = {
	username: '',
	password: ''
}

const formSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required'),
	password: yup
		.string()
		.required('Password is required')
})

function LoginPage() {

	const [formValues, setFormValues] = useState(initFormValues);
	const [formErrors, setFormErrors] = useState(initFormErrors);

	const onInputChange = evt => {
		const name = evt.target.name;
		const value = evt.target.value;

		yup
			.reach(formSchema, name)
			.validate(value)
			.then(valid => {
				setFormErrors({
					...formErrors,
					[name]: ''
				});
			})
			.catch(err => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0]
				});
			})

		setFormValues({
			...formValues,
			[evt.target.name]: evt.target.value
		});
	}

	return (
		<div className='login-page'>
			<header className='login-page-header'>
				{/* <img src={logo} alt='website logo'/> */}
				<h1 className='login-page-title'>Project Name</h1>

				<nav>
					<Link to='/'>Home</Link>
				</nav>
			</header>

			<LoginForm values={formValues} onInputChange={onInputChange} errors={formErrors}/>
			<Link to='/signup'>
				<button>Sign Up</button>
			</Link>
		</div>
	);
}

export default LoginPage;
