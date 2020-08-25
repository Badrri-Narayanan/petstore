import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			pet: [],
			searchfield: '',
		}
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({pet: users}));
	}
	
	beginSearch = (event) => {
		this.setState({searchfield: event.target.value})
	}
	
	render() {
		const {pet, searchfield} = this.state;
		const filteringPets = this.state.pet.filter(pet => {
			return pet.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		if(!pet.length) {
			return <h1>Loading</h1>
		} else {
			return (
			<div className="tc">
				<h1>Welcome to the Cat Pet Store</h1>
				<SearchBox searching={this.beginSearch}/>
				<Scroll>
					<CardList pet={filteringPets} />
				</Scroll>
			</div>
			);
		}
	}
}

export default App;