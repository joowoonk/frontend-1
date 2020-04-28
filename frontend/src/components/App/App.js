import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage.js';
import SignUpPage from '../Registration/SignUpPage.js';

import './App.css';

function App() {
	return (
		<div>
			<Switch>
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
