import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import LoginPage from '../Login/LoginPage.js';
import SignUpPage from '../Registration/SignUpPage.js';

import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route path='/Login'>
					<LoginPage />
				</Route>

				<Route path='/SignUp'>
					<SignUpPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
