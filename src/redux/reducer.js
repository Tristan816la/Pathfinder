import { SET_GRID, SET_EMPTY, SET_WALL } from '../redux/types';
import { generate_empty } from '../Algorithms/EmptyGrid';

const initialState = {
	grid: generate_empty()
};

const gridReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GRID:
			return {
				...state,
				grid: action.payload
			};
		case SET_WALL:
			const row = action.payload[0];
			const col = action.payload[1];
			state.grid[row][col].isWall = true;
			return {
				...state
			};
		default:
			return state;
	}
};
export default gridReducer;
