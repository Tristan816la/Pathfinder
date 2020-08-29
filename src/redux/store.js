import { createStore } from 'redux';
import gridReducer from './reducer';

const store = createStore(gridReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
