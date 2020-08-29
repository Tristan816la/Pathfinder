import React, { useState } from 'react';
import styled from 'styled-components';

const NodeObj = styled.div`
	width: 2vw;
	height: 2vw;
	background-color: ${(props) =>
		props.isWall
			? 'black'
			: props.isStart ? '#42f563' : props.isEnd ? '#eaff00' : props.isVisited ? 'blue' : 'undefined'};
	border: solid 0.03vw black;
	transition: background-color 0.2s ease-out;
`;

const Node = (props) => {
	const { pressed } = props;
	const [ start, setStart ] = useState(props.isStart);
	const [ end, setEnd ] = useState(props.isEnd);
	const [ wall, setWall ] = useState(props.isWall);
	const [ visited, setVisited ] = useState(props.isVisited);
	
	const handleOver = () => {
		if (pressed && !start && !end) {
			setWall(!wall);
		}
	};
	const handleClick = () => {
		if (!pressed && !start && !end) {
			setWall(!wall);
		}
	};
	return (
		<NodeObj
			onMouseOver={handleOver}
			onMouseDown={handleClick}
			isEnd={end}
			isStart={start}
			isWall={wall}
			isVisited={visited}
		/>
	);
};

export default Node;
