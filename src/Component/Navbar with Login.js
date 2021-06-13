import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import  Button  from '@material-ui/core/Button';
import { useHistory} from "react-router-dom";
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
   let history = useHistory();

  const handleSignIn = () => {
	history.push("/signIn");
};

  const handleSignUp = () => {
	  history.push("/signUp");
  };

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
			    <Button type="Button" className="signIn" onClick={handleSignIn}>
					Sign In
				</Button>
			
				<Button type ="Button" className="signUp" onClick={handleSignUp}>
					Sign Up
				</Button>
			
			</Toolbar>
			</AppBar>
	);
};

export default Navbar;