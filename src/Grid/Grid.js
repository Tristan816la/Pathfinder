import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Node from './Node';
import { generate, dijkstra } from '../redux/actions';
import { numCols } from '../Constants';

const Grid = (props) => {
	const { grid } = props;
	const [ pressed, setPressed ] = useState(false);

	useEffect(() => {}, []);

	const handleMouseDown = () => {
		setPressed(true);
	};

	const handleMouseUp = () => {
		setPressed(false);
	};

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${numCols}, 2vw)`
			}}
			className="grid"
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			{grid.map((rows, i) =>
				rows.map((col, k) => {
					return (
						<Node
							pressed={pressed}
							row={i}
							col={k}
							key={`${i}-${k}`}
						/>
					);
				})
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	grid: state.grid
});

const mapDispatchToProps = (dispatch) => ({
	generate: () => dispatch(generate()),
	dijkstra: (grid) => dispatch(dijkstra(grid))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
