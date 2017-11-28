import React from 'react';
import Navigation from './Navigation';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Navigation />);
});
