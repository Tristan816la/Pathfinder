import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Grid from './Grid/Grid';
import Nav from './Components/Nav';
import Dock from './Components/Dock';
import Description from './Components/Description';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Nav />
				<Description />
				<Grid />
				<Dock />
			</div>
		</Provider>
	);
}

export default App;
