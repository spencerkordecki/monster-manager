import React from 'react';
import { Checkbox } from 'react-bootstrap';

const Filter = ({ content, onChange }) => {
    return (
        <Checkbox value={content} onChange={onChange}>
            {content}
        </Checkbox>
    );
};

export default Filter;
