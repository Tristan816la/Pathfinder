import { SET_GRID, SET_EMPTY, SET_WALL } from "../../redux/types";
import { generate_empty } from "../../Algorithms/EmptyGrid";

const initialState = generate_empty();

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GRID:
      return action.payload;

    case SET_WALL: {
      const [row, col] = action.payload;
      state[row][col].isWall = true;
      return state;
    }

    case SET_EMPTY:
      const [row, col] = action.payload;
      state[row][col].isWall = false;
      return state;

    default:
      return state;
  }
};
export default gridReducer;
