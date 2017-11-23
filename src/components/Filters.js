import React, { Component } from 'react';
import { Well, FormGroup, ControlLabel, Checkbox, Col } from 'react-bootstrap';
import monsters from '../data/monsters.json';

const initialState = {
    types: [],
    sizes: [],
    alignments: []
};

class Filters extends Component {
    constructor(props) {
        super(props);

        const uniques = {};

        for (let i = 0; i < monsters.length; i++) {
            const monster = monsters[i];

            if (!(monster.type in uniques)) {
                uniques[monster.type] = 1;
                initialState['types'].push(monster.type);
            }

            if (!(monster.size in uniques)) {
                uniques[monster.size] = 1;
                initialState['sizes'].push(monster.size);
            }

            if (!(monster.alignment in uniques)) {
                uniques[monster.alignment] = 1;
                initialState['alignments'].push(monster.alignment);
            }
        }

        this.state = initialState;
    }

    render() {
        return(
            <Col md={3}>
                <Well>
                    <FormGroup>
                        <ControlLabel>Type</ControlLabel>
                        {this.state.types.map(function(type, index) {
                            return <Checkbox key={index}>{type}</Checkbox>;
                        }, this)}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Size</ControlLabel>
                        {this.state.sizes.map(function(size, index) {
                            return <Checkbox key={index}>{size}</Checkbox>;
                        }, this)}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Alignment</ControlLabel>
                        {this.state.alignments.map(function(alignment, index) {
                            return <Checkbox key={index}>{alignment}</Checkbox>;
                        }, this)}
                    </FormGroup>
                </Well>
            </Col>
        );
    }
};

export default Filters;