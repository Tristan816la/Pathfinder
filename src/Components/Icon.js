import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const IconStyle = {
	width: '5vw',
	minHeight: '10vh',
	opacity: '1.0'
};

const useStyles = makeStyles((theme) => ({
	button: {
		border: 'none'
	}
}));

export const Icon = (props) => {
	const classes = useStyles();
	return (
		<Button className={classes.button} onClick={props.action}>
			<Tooltip title={props.tip}>
				<img style={IconStyle} src={props.image} alt="icon" />
			</Tooltip>
		</Button>
	);
};
