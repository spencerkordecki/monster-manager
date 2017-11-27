import React, { Component } from 'react';
import { Well, FormGroup, ControlLabel, Checkbox, Col } from 'react-bootstrap';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            types: this.props.data.types,
            sizes: this.props.data.sizes,
            alignments: this.props.data.alignments
        };
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
