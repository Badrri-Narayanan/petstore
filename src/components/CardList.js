import React from 'react';
import Card from './Card';

const CardList = ({pet}) => {
		return(
		<div>
			{
				pet.map( (user,i) => {
					return <Card key={i}
							name={pet[i].name}
							city={pet[i].address.city}
							website={pet[i].website} 
						/>
				})
			}
		</div>
		);
}

export default CardList;