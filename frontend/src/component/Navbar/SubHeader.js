import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './style.css';

class SubHeader extends Component {
    render() {
        return (
            <Navbar expand="lg" className="navbar02">
                <Nav className="mr-auto sub-nav">
                    <NavDropdown title="Dogs" className="drop">
                        <NavDropdown.Item > <Link className='text' to="/product/type/dog-love">Dogs' Love</Link></NavDropdown.Item> 
                        <NavDropdown.Item > <Link className='text' to="/product/type/dog-food">Dogs' Food</Link> </NavDropdown.Item>
                        <NavDropdown.Item > <Link className='text' to="/product/type/dog-toy">Dogs' Toy</Link></NavDropdown.Item>
                        <NavDropdown.Item > <Link className='text' to="/product/type/dog-dailySupply">Dogs' Daily Supply</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Cats" className="drop">
                        <NavDropdown.Item > <Link className='text' to="/product/type/cat-love">Cats' Love</Link></NavDropdown.Item> 
                        <NavDropdown.Item > <Link className='text' to="/product/type/cat-food">Cats' Food</Link> </NavDropdown.Item>
                        <NavDropdown.Item > <Link className='text' to="/product/type/cat-toy">Cats' Toy</Link></NavDropdown.Item>
                        <NavDropdown.Item > <Link className='text' to="/product/type/cat-dailySupply">Cats' Daily Supply</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ShopByType" className="drop">
                        <NavDropdown.Item > <Link className='text' to="/product/type/food">Food</Link> </NavDropdown.Item>
                        <NavDropdown.Item > <Link className='text' to="/product/type/toy">Toy</Link></NavDropdown.Item>
                        <NavDropdown.Item > <Link className='text' to="/product/type/dailySupply">Daily Supply</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/product">Shop</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default SubHeader;