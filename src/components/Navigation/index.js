import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="">Monster Manager</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>Monster List</NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
