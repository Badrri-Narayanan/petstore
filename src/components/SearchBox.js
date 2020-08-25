import React from 'react';

const SearchBox = ( {searching} ) => {
	return (
		<div className="pa2">
			<input 
			className="pa3 ba b--green bg-light-yellow"
			type="search" 
			placeholder="Search for Pets"
			onChange={searching}
			/>
		</div>
	);
}
export default SearchBox;