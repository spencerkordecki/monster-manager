import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Filters from '../components/Filters';
import MonsterList from '../components/MonsterList';
import monsters from '../data/monsters.json';
import { Grid, Row } from 'react-bootstrap';

const initialState = {
    monsters: [...monsters],
    filters: {
        types: [],
        sizes: [],
        alignments: []
    },
    selectedFilters: {
        type: [],
        size: [],
        alignment: []
    }
};

class App extends Component {
    constructor(props) {
        super(props);

        const uniques = {};

        for (let i = 0; i < monsters.length; i++) {
            const monster = monsters[i];

            if (!(monster.type in uniques)) {
                uniques[monster.type] = 1;
                initialState.filters['types'].push(monster.type);
            }

            if (!(monster.size in uniques)) {
                uniques[monster.size] = 1;
                initialState.filters['sizes'].push(monster.size);
            }

            if (!(monster.alignment in uniques)) {
                uniques[monster.alignment] = 1;
                initialState.filters['alignments'].push(monster.alignment);
            }
        }

        this.state = initialState;
    }

    filter = (category, event) => {
        const updates = this.state.selectedFilters[category];

        updates.includes(event.target.value)
            ? updates.splice(updates.indexOf(event.target.value), 1)
            : updates.push(event.target.value);

        this.setState({
            selectedFilters: Object.assign(this.state.selectedFilters, {
                [category]: updates
            })
        });

        let filtered = [];

        for (const key in this.state.selectedFilters) {
            filtered = filtered.concat(
                monsters.filter(monster =>
                    this.state.selectedFilters[key].includes(monster[key])
                )
            );
        }

        this.setState({ monsters: filtered });
    };

    render() {
        return (
            <div id="app" className="container">
                <Row>
                    <Navigation />
                </Row>
                <Row>
                    <Grid>
                        <Row>
                            <Filters
                                data={this.state.filters}
                                filter={this.filter}
                            />
                            <MonsterList data={this.state.monsters} />
                        </Row>
                    </Grid>
                </Row>
            </div>
        );
    }
}

export default App;
