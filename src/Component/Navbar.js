import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignUpModalDialog from './SignUpModalDialog';
import SignInModalDialog from './SignInModalDialog';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Navbar = () => {
	const classes = useStyles();
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
	// const handleOpen = () => {
	// 	setOpenSignIn(true);
	// 	setOpenSignUp(true);
	// };

	// const handleClose = () => {
	// 	setOpenSignIn(false);
	// 	setOpenSignUp(false);
	// };

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Home
				</Typography>
				<Link to="/signIn">
                <Button type="Button" className="signIn" onClick={() => setOpenSignIn(true)}>
					Sign In
				</Button>
			</Link>
			<Link to="/signUp">
				<Button type ="Button" className="signUp" onClick={() => setOpenSignUp(true)}>
					Sign Up
				</Button>
				</Link>
			</Toolbar>
			<SignInModalDialog open={openSignIn} handleClose={() => setOpenSignIn(false)} />
			<SignUpModalDialog open={openSignUp} handleClose={() => setOpenSignUp(false)} />
		</AppBar>
	);
};

export default Navbar;