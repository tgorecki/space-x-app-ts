import configureStore from "redux-mock-store";
import React from 'react'
import { shallow } from "enzyme";
import { results } from '../mocks/data';
import * as ReactReduxHooks from "../../hooks/redux"
import { LaunchesList } from "../../components/LaunchesList/LaunchesList";
import { LaunchItem } from "../../components/LaunchesList/LaunchItem/LaunchItem";
import { Pagination } from "../../components/shared/Pagination/Pagination";

describe('<LaunchesList/>', () => {
    let wrapper;
    let useEffect;
    let store;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        store = configureStore()({
            data: results,
            fetching: false,
            error: null
        });


        useEffect = jest.spyOn(React, "useEffect");

        mockUseEffect();

        jest
            .spyOn(ReactReduxHooks, "useSelector")
            .mockImplementation(state => store.getState());

        jest
            .spyOn(ReactReduxHooks, "useDispatch")
            .mockImplementation(() => store.dispatch);

        wrapper = shallow(<LaunchesList store={store}/>);
    });

    it("should dispatch search action to store", () => {
        const actions = store.getActions();
        expect(actions).toEqual([{ type: "SEARCH", offset: 0, objectType: "launches" }]);
    });

    it("should render launches", () => {
        expect(wrapper.find(LaunchItem)).toHaveLength(2)
    });

    it('should render pagination buttons', () => {
        expect(wrapper.find(Pagination)).toHaveLength(1)

    })
});
