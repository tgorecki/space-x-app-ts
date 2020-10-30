import React from 'react';
import configureMockStore from 'redux-mock-store';
import { results } from "../mocks/data";
import * as ReactReduxHooks from 'react-redux';
import { shallow } from "enzyme";
import Launch from "../../components/Launch/Launch";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('<Launch/>', () => {
    let wrapper;
    let store;
    let props;

    beforeEach(() => {
        store = mockStore({
            data: results['docs'],
            fetching: false,
            error: null,
        });

        props = {
            match: { params: { id: results['docs'][0]['id'] } }
        };

        jest
            .spyOn(React, "useEffect")
            .mockImplementation(f => f());

        jest.spyOn(ReactReduxHooks, "useSelector")
            .mockImplementation(state => store.getState());

        jest.spyOn(ReactReduxHooks, "useDispatch")
            .mockImplementation(() => store.dispatch);

        wrapper = shallow(<Launch {...props} store={store}/>)
    });


    it('should render <Launch/> component', () => {
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('pre')).toHaveLength(1);
        expect(wrapper.find('pre').text()).toContain('FalconSat')
    });

});
