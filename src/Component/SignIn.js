import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),

		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '300px',
		},
		'& .MuiButtonBase-root': {
			margin: theme.spacing(2),
		},
	},
}));

const SignInForm = ({ handleClose }) => {
	const classes = useStyles();
	const { handleSubmit, control } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="email"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Email"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="email"
					/>
				)}
				rules={{ required: 'Email required' }}
			/>
			<Controller
				name="password"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Password"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="password"
					/>
				)}
				rules={{ required: 'Password required' }}
			/>
			<div>
      <Link to="/">
				<Button variant="contained" onClick={handleClose}>
					Cancel
				</Button>
        </Link>
				<Button type="submit" variant="contained" color="primary">
					SignIn
				</Button>
			</div>
		</form>
	);
};

export default SignInForm;