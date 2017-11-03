import React, { Component } from 'react';
import { Panel, Col, Row } from 'react-bootstrap';
import MonsterTile from '../components/MonsterTile';

class MonsterList extends Component {
    render() {
        return(
            <Col md={9}>
                <Panel>
                    <Row>
                        <MonsterTile />
                        <MonsterTile />
                        <MonsterTile />
                        <MonsterTile />
                    </Row>
                </Panel>
            </Col>
        );
    }
};

export default MonsterList;