import configureMockStore from "redux-mock-store";
import * as React from 'react'
import { shallow } from "enzyme";
import { results } from '../mocks/data';
import * as ReactReduxHooks from "react-redux"
import { LaunchesList } from "../../components/LaunchesList/LaunchesList";
import { LaunchItem } from "../../components/LaunchesList/LaunchItem/LaunchItem";
import { Pagination } from "../../components/shared/Pagination/Pagination";
import thunk from "redux-thunk";


const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('<LaunchesList/>', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = mockStore({
            data: results,
            fetching: false,
            error: null
        });

        jest
            .spyOn(ReactReduxHooks, "useSelector")
            .mockImplementation(state => store.getState());

        jest
            .spyOn(ReactReduxHooks, "useDispatch")
            .mockImplementation(() => store.dispatch);

        jest
            .spyOn(React, "useEffect")
            .mockImplementation(f => f());


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
