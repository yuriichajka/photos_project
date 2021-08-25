import React from "react";
import App from "../App";
import { Provider } from 'react-redux'
import store from "../redux/configureStore";
import renderer from 'react-test-renderer';
import {mount, render, shallow} from "enzyme";

it('snapshot', () => {
    const tree = shallow(<Provider store={store}><App /></Provider>);
    console.log(tree.debug())
    expect(tree).toMatchSnapshot();
});
