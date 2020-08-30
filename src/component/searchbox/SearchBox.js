import React, {Component} from 'react';
import './SearchBox.css'
class SearchBox extends Component {
    render(props) {
        return (
        <div>
            <input placeholder="Enter to Search"
                    type="search"
                    onChange={this.props.search}
                    className="input"
            />
        </div>
        );
    }
}

export default SearchBox;