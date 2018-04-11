import React from 'react';
import { Panel, Col } from 'react-bootstrap';

const MonsterTile = ({ name, type, armorClass, hitPoints, languages }) => {
  return (
    <Col md={4}>
      <Panel header={name}>
        <Panel.Heading>
          <Panel.Title>{name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <ul>
            <li>Type: {type}</li>
            <li>Armor Class: {armorClass}</li>
            <li>Hit Points: {hitPoints}</li>
            <li>Languages: {languages}</li>
          </ul>
        </Panel.Body>
      </Panel>
    </Col>
  );
};

export default MonsterTile;
