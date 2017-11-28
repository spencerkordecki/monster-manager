import React from 'react';
import MonsterTile from './MonsterTile';
import { shallow, mount } from 'enzyme';

describe('MonsterTile', () => {
    const props = {
        name: 'Adult Blue Dragon',
        type: 'dragon',
        armorClass: '19',
        hitPoints: '225',
        languages: 'Common, Draconic'
    };

    it('renders without crashing', () => {
        shallow(<MonsterTile />);
    });

    it('has a title with the name of the monster', () => {
        const wrapper = mount(<MonsterTile {...props} />);
        expect(wrapper.find('.panel-heading').text()).toEqual(props.name);
    });
});
