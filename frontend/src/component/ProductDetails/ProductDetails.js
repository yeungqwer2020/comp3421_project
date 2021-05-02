import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { addToCart } from '../../store/actions/userActions';
import './style.css';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quantity: 1,
            inCart: this.props.inCart
         }
    }
   
   
    renderSpinner() {
        return (
            <div  >
                <span className="load">Loading.....</span>
                <Spinner type="grow" color="success" className="spinner00" />
            </div>

        )
    }
    
    handleInputChange = event =>

        this.setState({ [event.target.name]: event.target.value })

    addToCart = (e) => {
        let qty = parseInt(document.getElementById("qty_value").value);

        e.preventDefault();

        this.props.addCart(this.props.product, qty)

        this.setState({
            inCart: true
        })
    }

    renderProductDetails(){
        const { product } = this.props;
        // const { addToCartHandler} = this.props;
        console.log("product details", this)
        return (
            <Row className="box1">


                <Col xl={4} className="box2">
                    <img className="img" src={product.pic}
                        alt="not avaliable"
                        height="300px"></img>
                    
                    <span className="card-text">

                        <small>Available Quantity: </small>{product.inStock}

                    </span>

                    {product.inStock > 0 
                    
                        ?
                        <div className='qty-box my-3'> 

                            {/* <input type="number" value={this.state.quantity} name="quantity"

                                onChange={this.handleInputChange} className="Center"

                                style={{ width: "60px", marginLeft: "20px", borderRadius: "3px" }} 
                                
                                /> */}
                                
                            <div className="m-auto">Qty:</div>  
                            <select
                                id="qty_value"
                                name='qty'
                                className='qty m-auto'
                                value={this.state.quantity}
                                onChange={(e) => { this.setState({quantity: this.value })}}
                            >
                                {[...Array(product.inStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </select>

                            {
                                this.state.inCart
                                    ? <button className="btn btn-sm btn-warning red m-auto">Added to cartt</button>
                                    : <button className="btn btn-sm btn-warning m-auto" onClick={this.addToCart}>Add to cart </button>
                            }     


                        </div> 
                        :
                        <p className="text-danger"> Product is out of stock </p>

                    }

                </Col>
                <Col xl={8}>
                    <div className="product-name">{product.name}</div>
                    <div className="price">HK $ {product.price}</div>
                    <div className="des1"><strong>DESCRIPTION</strong></div>
                    <div className="description">
                        {product.des}
                    </div>
                    {product.ingredient && (  
                        <div>                      
                            <div className="ing1"><strong>INGREDIENT</strong></div>
                            <div className="ingredient">
                                {product.ingredient}
                            </div>
                        </div>
                    )}
                    {product.remark && (  
                        <div>                      
                            <div className="rem1"><strong>REMARK</strong></div>
                            <div className="remark">
                                {product.remark}
                            </div>
                        </div>
                    )}
                    {product.high.length > 0 && ( 
                        <div className=" highlight">
                            <div className="high1"><strong>HIGHLIGHT</strong></div>
                            <ul className='high2'>
                                {product.high.map((high) => 
                                <li key={high} >
                                    {high}
                                </li>)}
                            </ul>
                        </div>
                    )}

                </Col>
            </Row>
        )
    }
    renderHome() {
        return (
            this.props.product === undefined ? this.renderSpinner() : this.renderProductDetails()
        )
    }


    render() {
        return this.renderHome();
    }
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        user: state.user,
        userSignin: state.userSignin

    }
}



export default connect(mapStateToProps,null)(ProductDetails);