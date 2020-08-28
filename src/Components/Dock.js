import React from 'react';
import { Icon } from './Icon';
import { DijkstraFind } from '../Algorithms/Dijkstra';

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

const Dock = () => {
	return (
		<div style={dockStyle}>
			<Icon image="menu-24px.svg" />
			<Icon image="maze.icon.svg" />
			<Icon image="weight.svg" />
			<Icon image="algorithm.svg" />
			<Icon image="bomb.svg" />
			<Icon image="start.svg" />
		</div>
	);
};

export default Dock;
