import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { connect } from 'react-redux';


class Cards extends Component {
    
    
    render() {
        console.log("product--",this);
        const { product } = this.props;
        return (
                    <div className="card">
                        <Link to={'/product/' +  product._id}>
                            <img 
                                className="img2" 
                                alt="product pic not availalble" 
                                src={product.pic}
                                width="100px" >                            
                            </img>
                        </Link>
                        <div className="a1">
                            <span className="name">{product.name}</span>
                            <span className="inStock">In Stock: {product.inStock}</span>
                            <div className="price">HK$ {parseFloat(product.price).toFixed(2)} </div>
                        </div>
                    </div>
                    
                
                
            
        )
    }
}

export default connect(null)(Cards);