import React from "react";
import {shallow} from "enzyme";
import Image from "./Image";
import {Img} from "../styled/styledPhotos";

describe('Image', () => {
   let wrapper;

   it('snapshot', () => {
       wrapper = shallow(<Image />)
       expect(wrapper).toMatchSnapshot();
   });
   describe('correct render', () => {
       beforeEach(() => {
           wrapper = shallow(<Image/>)
       });

       it('should render something', () => {
           expect(wrapper).not.toBeNull()
       })

       it('should Img exist', () => {
           expect(wrapper.find(Img).length).toBe(1);
       })
   })
})

