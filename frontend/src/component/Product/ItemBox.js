import React, { Component } from 'react';
import Cards from './../Home/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Products from '../Home/Products'
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';


class ItemBox extends Component {
   
    constructor(props) {
        super(props);
        console.error("constructor", {props : this.props});
        this.state = { 
            products: [],
        };
        this.location = this.props;
    }

    componentDidMount(props) {
        console.error("constructor", {keyword : this.location && this.location.keyword});
        axios.get("http://localhost:8000/products/type", { params: { "keyword":this.location.keyword, "type":this.props.type}})
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

    componentDidUpdate(prevProps, prevState) {
        console.error("constructor", {keyword : this.location && this.location.keyword});
        if (this.location.keyword || prevProps.type != this.props.type) {
            axios.get("http://localhost:8000/products/type", { params: { "keyword":this.location.keyword, "type":this.props.type}})
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
    }


    renderSpinner() {
        return (
            <div  >
                <span className="load">Loading.....</span>
                <Spinner type="grow" color="success" className="spinner00" />
            </div>

        )
    }


    renderProducts() {
        return (
            <div className="container-fluid">
                <Row className='bigrow'>
                    {this.state.products.map(product => {
                        return (
                            <Col xl={3} key={product.id}>
                                <Cards id='product-card'
                                    product={product} />
                            </Col>
                        )
                    })}
                </Row>
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
        console.log("product", this);

        return this.renderHome();
    }
}

export default connect(null)(ItemBox);