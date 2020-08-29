import React, { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { connect } from 'react-redux';
import { dijkstra } from '../redux/actions';

const dockStyle = {
	display: 'flex',
	position: 'absolute',
	justifyContent: 'space-around',
	background: 'rgb(192,192,192, 0.5)',
	bottom: '1vh',
	width: '80vw',
	height: '10vh',
	left: '10vw'
};

const Dock = (props) => {
	const [ grid, setGrid ] = useState(props.grid);
	const [ start, setStart ] = useState(false);

	useEffect(
		() => {
			if (start) {
				props.dijkstra(grid);
				setGrid(props.grid);
				setStart(false);
			}
		},
		[ start ]
	);

	const startVisualizer = () => {
		setStart(true);
	};

	return (
		<div style={dockStyle}>
			<Icon image="menu-24px.svg" tip="Menu" />
			<Icon image="maze.icon.svg" tip="Generate maze" />
			<Icon image="weight.svg" tip="Add weight" />
			<Icon image="algorithm.svg" tip="Choose Algorithm" />
			<Icon image="bomb.svg" tip="Add bomb" />
			<Icon image="start.svg" tip="Start Visualizer" action={startVisualizer} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	grid: state.grid
});

const mapDispatchToProps = (dispatch) => ({
	dijkstra: (grid) => dispatch(dijkstra(grid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dock);
