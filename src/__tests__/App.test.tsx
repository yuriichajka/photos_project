import React from 'react';
import App from '../App';
import { Provider } from 'react-redux'
import store from '../redux/configureStore';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('snapp',  () => {
    let wrapper;
    it('snapshot',  () => {
        wrapper = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    describe('dawd', () => {
        beforeEach(() => {
            wrapper = mount(<Provider store={store}><App /></Provider>);
        })

        it('should render something',  () => {
            expect(wrapper).not.toBeNull();
        });

        it('should be container', () => {
            expect(wrapper.find('.container')).toHaveLength(1);
        })
    })
});
