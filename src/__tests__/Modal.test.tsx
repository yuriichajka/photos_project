import React from 'react';

import Modal from '../components/Modal';

import renderer from 'react-test-renderer'
import {mount, shallow, render} from 'enzyme';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        myRoute: 'some-route-value',
    }),
}));

let wrapper;

describe('Modal snapshot',  () => {
    it('should add a snapshot',  () => {
        wrapper = renderer.create(<Modal />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
describe("Correct render", () => {
    beforeEach(() => {
        // @ts-ignore
        wrapper = mount(<Modal />);
    });

    it('should render something',  () => {
        expect(wrapper).not.toBeNull();
    });

    it('should contain inputs',  () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should contain button',  () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
});

    describe('dad', () => {
        it('should ',  () => {
            const mockCallBack = jest.fn();
            // @ts-ignore
            const component = mount(<Modal onClick={mockCallBack} />);
            component.find('button#test').simulate('click');
            expect(mockCallBack).toBeCalledTimes(1);
        });

        // it('should ',  () => {
        //     const mockCallBack = jest.fn();
        //     // @ts-ignore
        //     const component = mount(<Modal onChange={mockCallBack} />);
        //     expect(mockCallBack.mock.calls.length).toEqual(0);
        //     component.find('input#form1').simulate('click');
        //     expect(mockCallBack.mock.calls.length).toEqual(1);
        // });
    })
