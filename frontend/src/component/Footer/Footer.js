import React, { Component } from 'react';
import './../Navbar/style.css'
import logo from "../Navbar/petsp_logo.png";

export default class Footer extends Component {
    render() {
        return (
            <div className='footer py-3 m-auto justify-content-center'>
                <span className="my-2">PetSP is an online web shop of the pet supplies provider that providing people different kinds of pet's supplies.</span>
                <span className="my-2">Copyright 2021. All Rights Reserved.</span>
                <img style={{justifySelf: "center"}} src={logo} width='100px' />
            </div>
        )
    }
}
