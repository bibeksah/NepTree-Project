import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Notification from './Notification';
import { Navbar, Nav } from 'react-bootstrap';
import Neptreelogo from "../assets/Neptree.png"

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#"><Neptreelogo /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
        <SearchBar />
        <Nav className="me-auto">
          <Nav.Link href="#">UPI</Nav.Link>
          <Nav.Link href="#">Food</Nav.Link>
          <Nav.Link href="#">Shop</Nav.Link>
        </Nav>
        <Notification />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
