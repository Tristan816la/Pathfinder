import { SET_ALGORITHM, SET_FINISH } from "../types";

const initialState = {
  option: "DIJKSTRA",
  finished: false,
};
const algorithmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALGORITHM:
      return {
        ...state,
        option: action.payload,
      };
    case SET_FINISH:
      return {
        ...state,
        finished: true,
      };
    default:
      return state;
  }
};

export default algorithmReducer;
