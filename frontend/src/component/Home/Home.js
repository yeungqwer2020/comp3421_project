import React, { Component } from 'react';
import Slide from './Slide';
import Products from './Products'
import './style.css';

class Home extends Component {
    render() {
        return (
            <div >
                <img src='https://cdn.shopify.com/s/files/1/0073/0031/7248/files/slide5-too-many-product_960x384.jpg?v=1593690741' alt='image' width= '100%' />
                {/* <Slide/> */}
                <Products />
            </div>
        )
    }
}

export default Home;