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

    handleChange = (type, e) => {
        this.props.filter(type, e);
    };

    render() {
        return (
            <Col md={3}>
                <Well>
                    <FormGroup>
                        <ControlLabel>Type</ControlLabel>
                        {this.state.types.map(function(type, index) {
                            return (
                                <Checkbox
                                    onChange={e => this.handleChange('type', e)}
                                    key={index}
                                    value={type}
                                >
                                    {type}
                                </Checkbox>
                            );
                        }, this)}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Size</ControlLabel>
                        {this.state.sizes.map(function(size, index) {
                            return (
                                <Checkbox
                                    onChange={e => this.handleChange('size', e)}
                                    key={index}
                                    value={size}
                                >
                                    {size}
                                </Checkbox>
                            );
                        }, this)}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Alignment</ControlLabel>
                        {this.state.alignments.map(function(alignment, index) {
                            return (
                                <Checkbox
                                    onChange={e =>
                                        this.handleChange('alignment', e)
                                    }
                                    key={index}
                                    value={alignment}
                                >
                                    {alignment}
                                </Checkbox>
                            );
                        }, this)}
                    </FormGroup>
                </Well>
            </Col>
        );
    }
}

export default Filters;
