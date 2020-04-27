import React from 'react';

function LoginForm(props) {

	const {
		values,
		onInputChange,
		errors
	} = props;

	return (
		<form className='login-form'>
			<div className={errors}>
				{<p>{errors.username}</p>}
				{<p>{errors.password}</p>}
			</div>
			<label>Username - <input value={values.username} onChange={onInputChange} name='username' type='text'/></label>
			<label>Password - <input value={values.password} onChange={onInputChange} name='password' type='text'/></label>
		</form>
	);
}

export default LoginForm;
