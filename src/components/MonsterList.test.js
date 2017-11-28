import React from 'react';
import MonsterList from './MonsterList';
import { shallow } from 'enzyme';

const emptyState = {
    monsters: []
};

it('renders without crashing', () => {
    shallow(<MonsterList data={emptyState.monsters} />);
});
