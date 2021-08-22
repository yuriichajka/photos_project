import React from "react";
import {shallow} from "enzyme";
import Image from "./Image";

describe('Image', () => {
   it('snapshot', () => {
       const wrapper = shallow(<Image />)
       expect(wrapper).toMatchSnapshot();
   });
})

