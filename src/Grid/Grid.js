import React, { useState, useEffect } from 'react';
import Node from './Node';
const numRows = 15;
const numCols = 45;

/* Node Status Constants */
const EMPTY = 0;
const WALL = 1;
const VISITED = 2;
const PATH = 3;
const BOMB = 4;
const WEIGHT = 5;
const START = 6;
const END = 7;

/* Start & End */
const defaultStartRow = 7;
const defaultStartCol = 10;
const defaultEndRow = 7;
const defaultEndCol = 30;

const Grid = () => {
	const [ pressed, setPressed ] = useState(false);

	const [ grid, setGrid ] = useState(() => {
		const rows = [];
		for (let i = 0; i < numRows; i++) {
			rows.push(Array(numCols).fill(EMPTY));
		}

		rows[defaultStartRow][defaultStartCol] = START;
		rows[defaultEndRow][defaultEndCol] = END;
		return rows;
	});

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
				rows.map((col, k) => <Node pressed={pressed} status={grid[i][k]} row={i} col={k} key={`${i}-${k}`} />)
			)}
		</div>
	);
};

export default Grid;
