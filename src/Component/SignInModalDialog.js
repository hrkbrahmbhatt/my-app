import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SignIn from './SignIn';

const SignInModalDialog = ({ open, handleClose }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<SignIn handleClose={handleClose} />
		</Dialog>
	);
};

export default SignInModalDialog;