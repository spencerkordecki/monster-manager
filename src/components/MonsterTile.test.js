import React from 'react';
import MonsterTile from './MonsterTile';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<MonsterTile />);
});
