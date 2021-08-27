import React from 'react';

import App from '../App';

import { Provider } from 'react-redux'
import store from '../redux/configureStore';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

let wrapper;

describe('App snapshot',  () => {
    it('should add a snapshot',  () => {
        wrapper = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Correct render', () => {
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><App /></Provider>);
        console.log(wrapper.debug());
    });

    it('should render something',  () => {
        expect(wrapper).not.toBeNull();
    });

    it('should be container', () => {
        expect(wrapper.find('.container')).toHaveLength(1);
    });
});
