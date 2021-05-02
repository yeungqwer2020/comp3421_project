import React, { Component } from 'react';
import Cards2 from './Card2';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Axios from 'axios';
import { Spinner } from 'reactstrap';
import car from "../../images/petsp-deliver-car.png";
import phone from "../../images/phone-100.png";
import email from "../../images/email-open-100.png";


class Products extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            Skip: (0),
            Limit: (6)
            
        };
        
    }

    componentDidMount() {

        const variables = {
            skip: this.Skip,
            limit: this.Limit
        } 

        axios.get(`http://localhost:8000/products/`, variables)
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

    onLoadMore = () =>{
        this.setState({Limit: this.state.Limit + 6});
    }   


        renderProducts(){
            return (
                <div className="container-fluid mb-3">
                    <Row>
                        <div className="col-4 text-center">
                            <img src={car}/>
                            <h6>Free Shipping</h6>
                        </div>
                        <div className="col-4 text-center">
                            <img src={phone}/>
                            <h6>Call +852 1234 5678</h6>
                        </div>
                        <div className="col-4 text-center">
                            <img src={email}/>
                            <h6>Email help@petsp.com</h6>
                        </div>
                    </Row>
                    <Row>
                        <h4>Latest Products</h4>
                        <button 
                            className='btn-small red waves-effect lighten-2 mr-0 mb-0' 
                            style={{margin:"auto"}} 
                            onClick={this.onLoadMore}
                            hidden={this.props && this.props.disableLoadMore}>
                            Load more 
                        </button>
                    </Row>
                    <Row className='bigrow' style={{minHeight:"250px"}}>
                        {this.state.products.map((product, index) => {
                            return (
                                (index < this.state.Limit) && (
                                    <Col className='collumns' xl={2} key={product.id}>
                                        <Cards2 
                                        product={product}/>                                        
                                    </Col>
                                )
                            )
                        })}
                    </Row>
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

export default connect(null)(Products);