import React, {Component} from 'react';
import './Cardlist.css';
import Card from '../card/Card';

class Cardlist extends Component {
  render(props) {
    return (
      <div className="Cardlist">
        {
            this.props.catList.map(
              (cat, index) => 
                <Card key={index} 
                      name={cat.name}
                      email={cat.email}
                />)
        }
      </div>
    )
  }
}

export default Cardlist;