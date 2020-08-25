import React from 'react';
import './Card.css';

const Card = ({name, city, website}) => {
	return (
		<div className='bg-light-yellow dib br3 pa2 ma2 grow tc'>
			<img src={`https://robohash.org/${name}?set=set4`} alt="pet_pic"/>
			<h2>{name}</h2>
			<p>City {city}</p>
			<p>Contact: {website}</p>
		</div>
	);
}

export default Card;