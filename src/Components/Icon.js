import React from 'react';

const IconStyle = {
	width: '5vw',
	minHeight: '10vh',
	opacity: '1.0'
};
export const Icon = (props) => {
	return <img style={IconStyle} src={props.image} />;
};
