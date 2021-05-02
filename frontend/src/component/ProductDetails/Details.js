import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import Reviews from './Reviews';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { addToCart, updateCartQuantity } from '../../store/actions/cartActions';
import Products from '../Home/Products'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            quantity: 1,
            productId : this.props.match.params.id
        };    
    }

    
    componentDidMount() {
        axios.get(`http://localhost:8000/products/`)
            .then(result => {
                console.log("got data", result)
                this.setState({
                    products: result.data
                })
            })
            .catch(error => {
                console.log("error", error)

            })
    }

    renderSpinner() {
        return (
            <div  >
                <span className="load">Loading.....</span>
                <Spinner type="grow" color="success" className="spinner00" />
            </div>

        )
    }
    
    addToCart = (product, quantity) => {
        console.error("addToCart", {product, quantity});
        this.props.addToCart(product);
        console.log('add--', this.props)

        this.updateCartQuantity(product._id, quantity);

    }

    updateCartQuantity = (productId, quantity) => {
        if(quantity > 1)
            this.props.updateCartQuantity(productId, quantity);
        
    }

    removeFromCart = (product) => {
        this.props.removeFromCart(product.id);
        console.log('rem--', this.props)
    }


    renderProducts() {
        const product = this.state.products.find(x => x._id === this.props.match.params.id);
        const productId = this.props.match.params.id;

        console.log("details", this)
        return (
            <div>
                <Link to="/product">Back to results</Link>
                <ProductDetails
                    product={product}
                    productId={productId}
                    cart={this.props.cart}
                    addCart={this.addToCart}
                    handleRemove={this.removeFromCart}
                    inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.product.id === product.id).length > 0}
                />
                <Reviews />
                <Products disableLoadMore={true}/>
            </div>
        )
    }


    renderHome() {
        return (
            this.state.products === undefined ? this.renderSpinner() : this.renderProducts()
        )
    }


    render() {
        console.log("Homedata", this);

        return this.renderHome();

    }
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        user: state.user,
        userSignin: state.userSignin,
        cart: state.cart

    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addToCart, updateCartQuantity }, dispatch);
}

    
export default connect(mapStateToProps, mapDispatchToProps)(Details);
