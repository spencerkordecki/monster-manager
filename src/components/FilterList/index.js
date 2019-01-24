import React, { Component } from 'react';
import {
  Well, FormGroup, ControlLabel, Col
} from 'react-bootstrap';
import Filter from './Filter';

class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: this.props.data
    };
  }

  handleChange = (type, e) => {
    this.props.filter(type, e);
  };

  render() {
    return (
      <Col md={3}>
        <Well>
          {Object.keys(this.state.filters).map((key) => {
            const category = key;
            return (
              <FormGroup key={key}>
                <ControlLabel key={key}>{key}</ControlLabel>
                {this.state.filters[key].map(filter => (
                  <Filter
                    key={filter}
                    content={filter}
                    onChange={e => this.handleChange(category, e)}
                  />
                ))}
              </FormGroup>
            );
          })}
        </Well>
      </Col>
    );
  }
}

export default FilterList;
