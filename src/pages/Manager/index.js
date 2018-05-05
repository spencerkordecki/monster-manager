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

    // TODO: Filter monster data in state to only that used on the page to increase performance

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
    //let newFilters = {};
    let filters = this.state.selectedFilters[category];
    let filtered = [];

    if (filters.includes(event.target.value)) {
      filters.splice(filters.indexOf(event.target.value), 1);
    } else {
      filters.push(event.target.value);
    }

    /* newFilters = {
      ...this.state.selectedFilters,
      [category]: filters
    };

    filtered = monsters.filter(monster => {
      // TODO: Handle a user unchecking all checkboxes
      // TODO: Change filters from different categories to be AND instead of OR
    }) */

    if (event.target.checked) {
      // Handle the first filter click
      if (this.state.monsters.length === initialState.monsters.length) {
        filtered = monsters.filter(monster => {
          return monster[category] == event.target.value;
        });
      } else {
        filtered = monsters
          .filter(monster => {
            return monster[category] == event.target.value;
          })
          .concat(this.state.monsters)
          .sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
      }
    } else {
      filtered = this.state.monsters.filter(monster => {
        return monster[category] != event.target.value;
      });
    }

    this.setState({
      monsters: filtered,
      selectedFilters: {
        ...this.state.selectedFilters,
        [category]: filters
      }
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
