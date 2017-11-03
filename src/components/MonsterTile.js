import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';

class MonsterList extends Component {
    render() {
        return(
            <Col md={4}>
                <Panel header="Monster Name">
                    Stuff about the monster
                </Panel>
            </Col>
        );
    }
};

export default MonsterList;