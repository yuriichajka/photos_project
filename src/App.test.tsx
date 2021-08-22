import React from "react";
import {shallow} from "enzyme";
import App from "./App";
import { Provider } from 'react-redux'
import store from "./redux/configureStore";

describe('App', () => {
    it('snapshot', () => {
        const wrapper = shallow(<Provider store={store}><App /></Provider>)
        expect(wrapper).toMatchSnapshot();
    });
})