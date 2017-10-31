import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return(
            <Nav bsStyle="tabs" pullLeft="true">
                <NavItem>Monster List</NavItem>
                <NavItem>View Encounter</NavItem>
            </Nav>
        );
    }
};

export default Navigation;