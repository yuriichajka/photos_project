import React from 'react';

import Image from '../components/Image';

import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer'

let wrapper;
describe('Image snapshot',  () => {
    it('should add a snapshot', () => {
        wrapper = renderer.create(<Image/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    })
})
