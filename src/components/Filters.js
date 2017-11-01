import React, { Component } from 'react';
import { Well, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

class Filters extends Component {
    render() {
        return(
            <Well>
                <FormGroup>
                    <ControlLabel>Type</ControlLabel>
                    <Checkbox>Type #1</Checkbox>
                    <Checkbox>Type #2</Checkbox>
                    <Checkbox>Type #3</Checkbox>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Size</ControlLabel>
                    <Checkbox>Type #1</Checkbox>
                    <Checkbox>Type #2</Checkbox>
                    <Checkbox>Type #3</Checkbox>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Alignment</ControlLabel>
                    <Checkbox>Type #1</Checkbox>
                    <Checkbox>Type #2</Checkbox>
                    <Checkbox>Type #3</Checkbox>
                </FormGroup>
            </Well>
        );
    }
};

export default Filters;