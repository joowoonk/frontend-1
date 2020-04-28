import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage.js';
import SignUpPage from '../Registration/SignUpPage.js';

import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<h1>Project Home Page Will Be Here</h1>
					<Link to='/login'>Login Page</Link>
				</Route>

				<Route path='/login'>
					<LoginPage />
				</Route>

				<Route path='/signup'>
					<SignUpPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
