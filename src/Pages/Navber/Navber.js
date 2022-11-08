import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const Navber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Lawyer Power </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
               
            </Nav>
            <Nav>
          
             
                <Link className='text-decoration-none me-2 text-white' to = '/'> Home</Link>
                <Link className='text-decoration-none me-2 text-white' to = '/login'> Login</Link>
                
                <Link className='text-decoration-none me-2 text-white' to = '/'> My review</Link>
                <Link className='text-decoration-none me-2 text-white' to = '/'> My service </Link>
                 <Link className='text-decoration-none me-2 text-white' to='/blog'> Blog</Link>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;