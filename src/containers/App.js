import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Filters from '../components/Filters';
import MonsterList from '../containers/MonsterList';
import { Grid, Row } from 'react-bootstrap';

class App extends Component {
    filter = (type, event) => {};

    // TODO: do the JSON parsing in this file, then pass to filters and monster list

    render() {
        return (
            <div id="app" className="container">
                <Row>
                    <Navigation />
                </Row>
                <Row>
                    <Grid>
                        <Row>
                            <Filters filter={this.filter} />
                            <MonsterList />
                        </Row>
                    </Grid>
                </Row>
            </div>
        );
    }
}

export default App;
