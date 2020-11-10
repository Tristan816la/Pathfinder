import { createStore, combineReducers } from "redux";
import gridReducer from "./reducers/gridreducer";
import algorithmReducer from "./reducers/algorithmreducer";

const reducer = combineReducers({
  grid: gridReducer,
  algorithm: algorithmReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
