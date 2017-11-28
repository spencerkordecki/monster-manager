import React from 'react';
import Filters from './Filters';
import { shallow } from 'enzyme';

const emptyState = {
    types: [],
    sizes: [],
    alignments: []
};

it('renders without crashing', () => {
    shallow(<Filters data={emptyState} />);
});
