import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';
import * as yup from 'yup';

import SignUpForm from './SignUpForm.js';

function SignUpPage() {
	return (
		<div className='sign-up-page'>
			<header className='sign-up-header'>
				<h1 className='sign-up-page-title'>Sign Up for [Project Name]</h1>
				{/* <img src={logo} alt='website logo'/> */}

				{/* <nav>
					<Link to='/'></Link>
				</nav> */}
			</header>

			<SignUpForm values={formValues} onInputChange={onInputChange} handleSubmit={handleSubmit} errors={errors}/>
		</div>
	);
}

export default SignUpPage;
