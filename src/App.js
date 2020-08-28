import React, { Fragment } from 'react';
import './App.css';
import Grid from './Grid/Grid';
import Nav from './Components/Nav';
import Dock from './Components/Dock';
import { Typography } from '@material-ui/core';
import Description from './Components/Description';

function App() {
	return (
		<div className="App">
			<Nav />
			<Description />
			<Grid />
			<Dock />
		</div>
	);
}

export default App;
