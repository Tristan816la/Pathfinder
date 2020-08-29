import { SET_GRID } from '../redux/types';
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
		default:
			return state;
	}
};
export default gridReducer;
