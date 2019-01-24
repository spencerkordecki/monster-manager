import React from 'react';
import { Checkbox } from 'react-bootstrap';

const Filter = ({ content, onChange }) => (
  <Checkbox value={content} onChange={onChange}>
    <span className="filter-label">{content}</span>
  </Checkbox>
);

export default Filter;
