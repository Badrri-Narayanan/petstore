import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflow:'scroll', border: '6px solid yellow', height: '500px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;