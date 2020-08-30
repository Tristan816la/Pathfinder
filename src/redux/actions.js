import { SET_GRID, SET_EMPTY, SET_WALL } from '../redux/types';
import { generate_empty } from '../Algorithms/EmptyGrid';
import { DijkstraFind } from '../Algorithms/Dijkstra';
import { defaultStartRow, defaultEndRow, defaultStartCol, defaultEndCol } from '../Constants';

export const dijkstra = (grid) => {
	const start = grid[defaultStartRow][defaultStartCol];
	const end = grid[defaultEndRow][defaultEndCol];
	const result = DijkstraFind(grid, start, end);

	return {
		type: SET_GRID,
		payload: result
	};
};

export const generate = () => {
	const result = generate_empty();

	return {
		type: SET_GRID,
		payload: result
	};
};

export const setIsWall = (row, col) => {
	const result = [ row, col ];

	return {
		type: SET_WALL,
		payload: result
	};
};

export const setIsEmpty = (row, col) => {
	const result = [ row, col ];

	return {
		type: SET_EMPTY,
		payload: result
	};
};
