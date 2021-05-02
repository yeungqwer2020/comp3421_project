import React, { Component } from 'react';
import ItemBox from './ItemBox';
import Filter from './Filter';
import './style.css';

class Items extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div className="bigitems">
                <ItemBox
                    keyword={this.props.match.params.keyword}
                    type={this.props.match.params.type}
                />
            </div>
        )
    }
}

export default Items;