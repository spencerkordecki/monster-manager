import React from 'react';
import { Panel, Col } from 'react-bootstrap';

const MonsterTile = ({
  name, type, armorClass, hitPoints, languages
}) => (
  <Col md={4}>
    <Panel header={name}>
      <Panel.Heading>
        <Panel.Title>{name}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <ul>
          <li className="monster-tile__info">
            <span className="monster-tile__category">Type: </span>
            {type}
          </li>
          <li className="monster-tile__info">
            <span className="monster-tile__category">Armor Class: </span>
            {armorClass}
          </li>
          <li className="monster-tile__info">
            <span className="monster-tile__category">Hit Points: </span>
            {hitPoints}
          </li>
          <li className="monster-tile__info">
            <span className="monster-tile__category">Languages: </span>
            {languages}
          </li>
        </ul>
      </Panel.Body>
    </Panel>
  </Col>
);

export default MonsterTile;
