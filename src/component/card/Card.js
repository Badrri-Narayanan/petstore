import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render(props) {
    return (
      <div className="card">
        <img src={`https://robohash.org/${this.props.name}?set=set4`} alt="Avatar"/>
        <div className="container">
          <h3>{this.props.name}</h3>
          <h6>{this.props.email}</h6>
        </div>
      </div>
    );
  }
}

export default Card;