import React, { useState } from 'react';
import styled from 'styled-components';
const EMPTY = 0;
const WALL = 1;
const VISITED = 2;
const PATH = 3;
const BOMB = 4;
const WEIGHT = 5;
const START = 6;
const END = 7;
const defaultStartRow = 7;
const defaultStartCol = 10;
const defaultEndRow = 7;
const defaultEndCol = 30;

const NodeObj = styled.div`
	width: 2vw;
	height: 2vw;
	background-color: ${(props) =>
		props.status === WALL
			? 'black'
			: props.status === START ? '#42f563' : props.status === END ? '#eaff00' : 'undefined'};
	border: solid 0.03vw black;
	transition: background-color 0.2s ease-out;
`;

const Node = (props) => {
	const { pressed, row, col, status } = props;
	const [ nodeStatus, setnodeStatus ] = useState(status);

	const handleClick = (e) => {
		if (!pressed && nodeStatus === EMPTY) {
			setnodeStatus(WALL);
		} else if (!pressed && nodeStatus === WALL) {
			setnodeStatus(EMPTY);
		}
	};

	const handleOver = (e) => {
		if (pressed && nodeStatus === EMPTY) {
			setnodeStatus(1);
		} else if (pressed && nodeStatus === WALL) {
			setnodeStatus(EMPTY);
		}
	};

	return <NodeObj onMouseOver={handleOver} onMouseDown={handleClick} status={nodeStatus} />;
};

export default Node;
