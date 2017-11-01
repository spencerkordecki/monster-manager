import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Filters from '../components/Filters';
import MonsterList from '../containers/MonsterList'
import { Grid, Col } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
			<div id="app" className="container">
                <Navigation />
                <Grid>
                    <Col md={4}>
                        <Filters />
                    </Col>
                    <Col md={8}>
                        <MonsterList />
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default App;