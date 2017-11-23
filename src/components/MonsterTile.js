import React from 'react';
import { Panel, Col } from 'react-bootstrap';

const MonsterTile = ({
    name,
    type,
    armorClass,
    hitPoints,
    languages
}) => {
    return(
        <Col md={4}>
            <Panel header={name}>
                <ul>
                    <li>Type: {type}</li>
                    <li>Armor Class: {armorClass}</li>
                    <li>Hit Points: {hitPoints}</li>
                    <li>Languages: {languages}</li>
                </ul>
            </Panel>
        </Col>
    );
};

export default MonsterTile;