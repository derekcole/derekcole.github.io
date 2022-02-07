import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { mainBody, aboutMe } from './config';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const NavBar = () => {
    return (

                <Navbar className='sticky-nav'>
            <Navbar.Brand className='brand' href={'/#home'}>
                {`${mainBody.Company}`}
            </Navbar.Brand>
            <Nav className='mr-auto'>
            <Nav.Link
                    className='nav-link lead'
                    href={'/#about'}
                >
                    About
                </Nav.Link>
                <Nav.Link
                    className='nav-link lead'
                    href={'/#bookings'}
                >
                    Bookings
                </Nav.Link>
                <Nav.Link
                    className='nav-link lead'
                    href={'/#services'}
                >
                    Services
                </Nav.Link>
                
            </Nav>
        </Navbar>
    )
}
  
export default NavBar;