import React from 'react';

import App from '../App';

import { Provider } from 'react-redux'
import store from '../redux/configureStore';
import { mount } from 'enzyme';

let wrapper;

describe('App snapshot',  () => {
    it('should add a snapshot',  () => {
        wrapper = mount(<Provider store={store}><App /></Provider>);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});

describe('Correct render', () => {
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><App /></Provider>);
    });

    it('should render something',  () => {
        expect(wrapper).not.toBeNull();
    });

    it('should be container', () => {
        expect(wrapper.find('.container')).toHaveLength(1);
    });
});
