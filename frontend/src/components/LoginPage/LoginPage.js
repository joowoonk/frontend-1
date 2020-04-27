import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm.js';

function LoginPage() {
	return (
		<div className='login-page'>
			<header className='login-page-header'>
				{/* <img src={logo} alt='website logo'/> */}
				<h1 className='login-page-title'>Project Name</h1>

				{/* <nav>
					<Link to='/'></Link>
				</nav> */}
			</header>
		</div>
	);
}

export default LoginPage;
