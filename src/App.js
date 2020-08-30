import React, {Component} from 'react';
import './App.css';
import Cardlist from './component/cardlist/Cardlist.jsx';
import SearchBox from './component/searchbox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: '',
    };
  }

  getCatList() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(catlist => this.setState({cats: catlist}));
  }

  componentDidMount() {
    this.getCatList();
  }

  onSearchInput = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const { cats, searchfield } = this.state;
    const filteredCatList = cats.filter(cat =>
        cat.name.toLowerCase().includes(searchfield.toLowerCase())
      );
    return (
      <div className="App">
        <h1>The Cat Store</h1>
        <SearchBox search={this.onSearchInput}/>
        <Cardlist catList={filteredCatList}/>
      </div>
    );
  }
}

export default App;