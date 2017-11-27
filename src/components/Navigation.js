import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
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
    }
}

export default Navigation;
