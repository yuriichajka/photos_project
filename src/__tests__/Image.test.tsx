import React from 'react';

import Image from '../components/Image';

import { shallow } from 'enzyme';

describe('Image', () => {
   it('snapshot', () => {
       const wrapper = shallow(<Image />)
       expect(wrapper).toMatchSnapshot();
   });
});
