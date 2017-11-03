import React, { Component } from 'react';
import { Well, FormGroup, ControlLabel, Checkbox, Col } from 'react-bootstrap';

class Filters extends Component {
    render() {
        return(
            <Col md={3}>
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
            </Col>
        );
    }
};

export default Filters;