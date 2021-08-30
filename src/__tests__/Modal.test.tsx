import React from 'react';

import Modal from '../components/Modal';

import renderer from 'react-test-renderer'
import { mount } from 'enzyme';

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
        const getPhoto = jest.fn().mockImplementation(() => Promise.resolve());
        let wrapper;
        beforeEach(() => {
            // @ts-ignore
            wrapper = mount(<Modal getPhoto={getPhoto}/>)
        });

        afterEach(() => {
            wrapper = null;
        });

        it("should add name to first input field", () => {
            wrapper.find("input#form1").simulate("change", { target: { value: "Charles" } });
            expect(wrapper.find("input#form1").text()).toEqual("Charles");
        });

    });
