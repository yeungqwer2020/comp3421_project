import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Checkbox, Collapse } from 'antd';
const { Panel } = Collapse


const brand = [
    {
        "_id":1,
        "name": "samsung"
    },
    {
        "_id": 2,
        "name": "vivo"
    },
    {
        "_id": 3,
        "name": "redmi"
    },
    {
        "_id": 4,
        "name": "asus"
    },
    {
        "_id": 5,
        "name": "black"
    }
]

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            productKeyword : this.props.keyword,
            productType : this.props.type
        };
        this.key = "";
    }

    handelToggle = (value) =>{
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.error("componentDidUpdate enter!", {prevProps,prevState});
        if (prevState.productType != this.state.productType || prevState.productKeyword != this.state.productKeyword) {
            console.error("prevState !== this.state");
            this.key = "";

            if(this.state.productKeyword)
                this.key += this.state.productKeyword + "";
    
            if(this.state.productType)
                this.key += this.state.productType + "";
    
            this.key += new Date();    
        }
     }

    render() {        
        return (            
            <Accordion className=" filter">
                <div className="container"><strong>FILTERS</strong></div>
                {this.props.keyword && (<span>{this.props.keyword}</span>)}
                {this.props.type && (<span>{this.props.type}</span>)}
                <div className='section'>
                    <span>Price</span>
                </div>
                <div className='section fliterbox'>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        RAM
                    </Accordion.Toggle>                       
                    <Accordion.Collapse eventKey="0">
                        <form className='form1'>
                            <label>
                            <input type='checkbox' />
                            6 GB
                            </label>
                            <label>
                                <input type='checkbox' />
                            4 GB
                            </label>
                            <label>
                                <input type='checkbox' />
                            3 GB
                            </label>
                        </form>
                    </Accordion.Collapse>

                    <Collapse defaultActiveKey={['0']}>
                            <Panel header key='1'>
                                {brand.map((value, index) => (
                                    <React.Fragment key={index}>
                                        <Checkbox
                                            onChange={()=>this.handelToggle(value._id)}
                                            type='checkbox'
                                            checked
                                        />
                                        <span>{value.name}</span>
                                    </React.Fragment>
                                ))}
                            </Panel>
                    </Collapse>
                </div>                
            </Accordion>                                
        )
    }
}

export default Filter;