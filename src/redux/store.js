import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import gridReducer from "./reducers/gridreducer";
import algorithmReducer from "./reducers/algorithmreducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  grid: gridReducer,
  algorithm: algorithmReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
