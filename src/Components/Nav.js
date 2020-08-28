import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Icon } from './Icon';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	nav: {
		display: 'flexbox',
		flexDirection: 'row',
		justifyContent: 'space-around',
		margin: 'auto',
		paddingBottom: 10,
		background: 'black'
	},
	navText: {
		alignSelf: 'flex-end'
	}
}));

const Nav = () => {
	const placeHolders = 15;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.nav}>
				<div />
				<Icon image="git.svg" />
				{[ ...Array(placeHolders) ].map((e, i) => <div key={i} />)}
				<Typography variant="h6" className={classes.navText}>
					Clear path
				</Typography>
				<Typography variant="h6" className={classes.navText}>
					Clear all
				</Typography>
				<Typography variant="h6" className={classes.navText}>
					Walkthrough
				</Typography>
			</AppBar>
		</div>
	);
};

export default Nav;
