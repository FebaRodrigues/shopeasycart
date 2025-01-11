// src/components/Header.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/l.jpeg'; // Adjust the path as necessary

const Header = ({ cartCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 sticky-top">
      <Container fluid className="w-100 px-4">
        <Navbar.Brand as={Link} to="/" className="fs-3 d-flex align-items-center">
          <img
            src={logo}
            alt="ShopEasy Logo"
            className="me-2" // Add some margin to the right
          />
          ShopEasy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="px-3">Products</Nav .Link>
            <Nav.Link as={Link} to="/about" className="px-3">About</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="px-3">
              Cart ({cartCount})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;