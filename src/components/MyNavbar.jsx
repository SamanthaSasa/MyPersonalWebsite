import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar className="navBg" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="title" href="#home">I'm a/an...</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <NavDropdown className="title" title="Engineer-To-Be" id="basic-nav-dropdown">
              <NavDropdown.Item className="downTitle" href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className="downTitle" href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="downTitle" href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="downTitle" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="title">Cinephile</Nav.Link>
            <Nav.Link href="#link" className="title">Shutterbug</Nav.Link>
            <Nav.Link href="#link" className="title">Fashion Aficionado</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;