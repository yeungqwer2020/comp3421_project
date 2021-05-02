import React from 'react';
import './style.css';
import {Button, Form , Input, } from 'antd';
import axios from 'axios';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Upload extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            type: '',
            pic:'',
            price:'',
            des:'',
            ingredient:'',
            remark:'',
            inStock:'',
            erros: [],
            editing: false,
        };

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = event => {
        event.preventDefault();
        

        if (!this.state.name || !this.state.type || !this.state.pic || !this.state.price || !this.state.des || !this.state.inStock){
            return alert('Please fill all feilds of the form')
        }


        const variables ={
            name:  this.state.name ,
            type: this.state.type,
            pic: this.state.pic,
            price: this.state.price,
            des: this.state.des,
            ingredient:this.state.ingredient,
            remark:this.state.remark,
            inStock: this.state.inStock

        }

        Axios.post('http://localhost:8000/products/', variables)
            .then(response => {
                    console.log(response) 
                    alert('Your product is uploaded succefully')
                    this.props.history.push('/') 
            })
            .catch(error => {
                alert("Sorry! product failed to upload")
                console.log(error) 
            })

    }

    render() {
        return (
            <div className='container upload pb-4'>
                <h2>Upload product</h2>
                <Form onSubmit={this.onSubmit}>
                    <div className='row'>
                        <div className='input-feild col s6 pr-3 pl-0'>
                            <label htmlFor="name"> Name</label>
                            <input
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                id="name"
                                className='validate' 
                            />
                        </div>

                        <div className='input-feild col s6 pl-3 pr-0'>
                            <label htmlFor="type"> type</label>
                            <input
                                name="type"
                                value={this.state.type}
                                onChange={this.handleChange}
                                id="type"
                                className='validate'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <label htmlFor="pic"> Pic</label>
                        <input
                            
                            name="pic"
                            value={this.state.pic}
                            onChange={this.handleChange}
                            id="pic"
                            className='validate'
                        />
                    </div>
                    <div className='row'>
                        <div className='col-6 pr-3 pl-0'>
                            <label htmlFor="price"> Price</label>
                            <input
                                type='number'
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange}
                                id="price"
                                className='validate'
                            />
                        </div>
                        <div className='col-6 pl-3 pr-0'>
                            <label htmlFor="inStock"> InStock</label>
                            <input
                                type='number'
                                name="inStock"
                                value={this.state.inStock}
                                onChange={this.handleChange}
                                id="inStock"
                                className='validate'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <label htmlFor="des"> Description</label>
                        <input
                            name="des"
                            value={this.state.des}
                            onChange={this.handleChange}
                            id="des"
                        />
                    </div>
                    <div className='row'>
                        <label htmlFor="ingredient"> Ingredient</label>
                        <input
                            name="ingredient"
                            value={this.state.ingredient}
                            onChange={this.handleChange}
                            id="ingredient"
                        />
                    </div>
                    <div className='row'>
                        <label htmlFor="remark"> Remark</label>
                        <input
                            name="remark"
                            value={this.state.remark}
                            onChange={this.handleChange}
                            id="remark"
                        />
                    </div>
                    
                    <Button
                        className='btn waves-effect red lighten-2'
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Link to='/admin_products'>
                        <Button className='btn waves-effect red lighten-2'
                        >Edit Products</Button>
                    </Link>
                    &nbsp;
                    &nbsp;
                </Form>
                
            </div>
        )
    }
}


export default connect(null) (Upload);