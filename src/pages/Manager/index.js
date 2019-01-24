import React, { Component } from 'react';
import { Row, Panel } from 'react-bootstrap';
import Navigation from '../../components/Navigation';
import FilterList from '../../components/FilterList';
import MonsterList from '../../components/MonsterList';
import monsters from '../../data/monsters.json';

const initialState = {
  monsters: [...monsters],
  filters: {
    type: [],
    size: [],
    alignment: []
  },
  selectedFilters: {
    type: [],
    size: [],
    alignment: []
  }
};

class Manager extends Component {
  constructor(props) {
    super(props);

    const uniques = {};

    for (let i = 0; i < monsters.length; i += 1) {
      const monster = monsters[i];

      if (!(monster.type in uniques)) {
        uniques[monster.type] = 1;
        initialState.filters.type.push(monster.type);
      }

      if (!(monster.size in uniques)) {
        uniques[monster.size] = 1;
        initialState.filters.size.push(monster.size);
      }

      if (!(monster.alignment in uniques)) {
        uniques[monster.alignment] = 1;
        initialState.filters.alignment.push(monster.alignment);
      }
    }

    this.state = initialState;
  }

  filter = (category, event) => {
    let updatedFilters = {};
    const categoryFilters = this.state.selectedFilters[category];
    let filtered = [];

    if (categoryFilters.includes(event.target.value)) {
      categoryFilters.splice(categoryFilters.indexOf(event.target.value), 1);
    } else {
      categoryFilters.push(event.target.value);
    }

    updatedFilters = {
      ...this.state.selectedFilters,
      [category]: categoryFilters
    };

    filtered = monsters.filter((monster) => {
      let isFilteredMonster = true;

      Object.keys(updatedFilters).forEach((key) => {
        if (updatedFilters[key].length) {
          if (!updatedFilters[key].includes(monster[key])) {
            isFilteredMonster = false;
          }
        }
      });

      return isFilteredMonster;
    });

    this.setState({
      monsters: filtered,
      selectedFilters: updatedFilters
    });
  };

  render() {
    return (
      <Panel id="app" className="container">
        <Row>
          <Navigation />
        </Row>
        <Row>
          <FilterList data={this.state.filters} filter={this.filter} />
          <MonsterList data={this.state.monsters} />
        </Row>
      </Panel>
    );
  }
}

export default Manager;
