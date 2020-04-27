import React from 'react';

function SignUpForm(props) {

	const {
		values,
		onInputChange,
		handleSubmit,
		errors
	} = props;

	return (
		<form className='sign-up-form'>
			<label>First Name - <input value={values.firstName} onChange={onInputChange} name='firstName' type='text'/></label>
			<label>Last Name - <input value={values.lastName} onChange={onInputChange} name='lastName' type='text'/></label>
			<label>Username - <input value={values.username} onChange={onInputChange} name='username' type='text'/></label>
			<label>Email - <input value={values.email} onChange={onInputChange} name='email' type='text'/></label>
			{/* maybe dropdown for birthday */}
			<label>Password - <input value={values.password} onChange={onInputChange} name='password' type='text'/></label>
			<label>Confirm Password - <input value={values.confirmPassword} onChange={onInputChange} name='confirmPassword' type='text'/></label>
			<button onClick={handleSubmit} name='submit'>Create Account</button>
		</form>
	);

}

export default SignUpForm;
