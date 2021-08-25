import React from "react";
import { shallow} from "enzyme";
import Modal from "../components/Modal";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        myRoute: 'some-route-value',
    }),
}));

describe('Modal', () => {
    it('snapshot', () => {
        const wrapper = shallow(<Modal />)
        console.log(wrapper.debug())
        expect(wrapper).toMatchSnapshot();
    });
});



