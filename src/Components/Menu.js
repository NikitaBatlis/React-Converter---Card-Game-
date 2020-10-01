import React from 'react';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown"

export default function Menu(props) {
    return (
        
    <>
        <Navbar bg="light" expand="lg">
        <Link to="/"> <Navbar.Brand>Converter & Card Game</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">                
                    <NavDropdown.Item as={Link} to="/converter" >Currency Converter</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/gameboard">Win!</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    </>

    )
}

