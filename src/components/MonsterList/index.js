import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MonsterTile from './MonsterTile';

class MonsterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      monsters: nextProps.data
    });
  }

  render() {
    return (
      <Col md={9}>
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
      </Col>
    );
  }
}

export default MonsterList;
