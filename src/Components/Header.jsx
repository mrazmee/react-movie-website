import React from 'react';

function Header(props){
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default Header;