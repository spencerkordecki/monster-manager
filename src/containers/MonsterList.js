import React, { Component } from 'react';
import { Panel, Col, Row } from 'react-bootstrap';
import MonsterTile from '../components/MonsterTile';
import monsters from '../data/monsters.json';

const initialState = {
    monsters: [...monsters]
};

class MonsterList extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    render() {
        return (
            <Col md={9}>
                <Panel>
                    <Row className={'equal'}>
                        {this.state.monsters.map(function(monster, index) {
                            return (
                                <MonsterTile
                                    key={index}
                                    name={monster.name}
                                    type={monster.type}
                                    armorClass={monster.armor_class}
                                    hitPoints={monster.hit_points}
                                    languages={monster.languages}
                                />
                            );
                        }, this)}
                    </Row>
                </Panel>
            </Col>
        );
    }
}

export default MonsterList;
