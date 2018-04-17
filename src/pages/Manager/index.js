import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import FilterList from '../../components/FilterList';
import MonsterList from '../../components/MonsterList';
import monsters from '../../data/monsters.json';
import { Row, Panel } from 'react-bootstrap';

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

    for (let i = 0; i < monsters.length; i++) {
      const monster = monsters[i];

      if (!(monster.type in uniques)) {
        uniques[monster.type] = 1;
        initialState.filters['type'].push(monster.type);
      }

      if (!(monster.size in uniques)) {
        uniques[monster.size] = 1;
        initialState.filters['size'].push(monster.size);
      }

      if (!(monster.alignment in uniques)) {
        uniques[monster.alignment] = 1;
        initialState.filters['alignment'].push(monster.alignment);
      }
    }

    this.state = initialState;
  }

  filter = (category, event) => {
    let filters = this.state.selectedFilters[category];
    let filtered = [];

    // TODO: Work on handling different types of filters

    if (filters.includes(event.target.value)) {
      filters.splice(filters.indexOf(event.target.value), 1);
    } else {
      filters.push(event.target.value);
    }

    if (event.target.checked) {
      filtered = monsters.filter(monster => {
        return monster[category] == event.target.value;
      });

      if (this.state.monsters.length === initialState.monsters.length) {
        this.setState({
          monsters: filtered,
          filters: {
            [category]: filters
          }
        });
      } else {
        filtered = filtered.concat(this.state.monsters);
        this.setState({
          monsters: filtered,
          filters: {
            [category]: filters
          }
        });
      }
    } else {
      filtered = this.state.monsters.filter(monster => {
        return monster[category] != event.target.value;
      });

      this.setState({
        monsters: filtered,
        filters: {
          [category]: filters
        }
      });
    }
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
