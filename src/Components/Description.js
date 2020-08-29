import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	destext: {
		margin: '2.5vh 0 2vh 5vw'
	},
	emphasis: {
		color: 'red'
	}
}));

const Description = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography variant="h5" className={classes.destext}>
				Dijkastra Algorithm is <span className={classes.emphasis}>weighted</span> and guarantees the
				<span className={classes.emphasis}> shortest</span> path
			</Typography>
		</div>
	);
};

export default Description;
