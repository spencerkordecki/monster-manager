import React from 'react';
import Filters from './Filters';
import { shallow } from 'enzyme';

describe('Filters', () => {
    const emptyState = {
        types: [],
        sizes: [],
        alignments: []
    };

    const mockState = {
        types: ['aberration', 'humanoid', 'dragon'],
        sizes: ['Large', 'Medium', 'Small'],
        alignments: ['lawful evil', 'chaotic evil', 'neutral']
    };

    it('renders without crashing', () => {
        shallow(<Filters data={emptyState} />);
    });
});
