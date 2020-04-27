import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
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

function LoginPage() {

	const [formValues, setFormValues] = useState(initFormValues);
	const [formErrors, setFormErrors] = useState(initFormErrors);

	const onInputChange = evt => {
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

				{/* <nav>
					<Link to='/'></Link>
				</nav> */}
			</header>

			<LoginForm values={formValues} onInputChange={onInputChange}/>
		</div>
	);
}

export default LoginPage;
