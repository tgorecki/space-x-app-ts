import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getLaunch } from "../../actions/launch";
import * as spaceXApi from '../../services/SpaceXService'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Launch async actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({ data: {} });
    });

    it('should create fetch and fulfilled actions', () => {
        const mockData = { 'id': '1', 'name': 'asd' };

        jest
            .spyOn(spaceXApi, "getDataByObjectId")
            .mockImplementation(() => Promise.resolve({ data: mockData }));

        const expectedActions = [
            { type: "FETCH_LAUNCH" },
            { type: "FETCH_LAUNCH_FULFILLED", data: { 'id': '1', 'name': 'asd' } }
        ];

        return store.dispatch(getLaunch('1'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    });

    it('should create fetch and error actions', () => {
        const expectedActions = [
            { type: "FETCH_LAUNCH" },
            { type: "FETCH_LAUNCH_REJECTED", error: { message: "error message" } }
        ];

        jest
            .spyOn(spaceXApi, "getDataByObjectId")
            .mockImplementation(() => {
                throw new Error("error message")
            });

        return store.dispatch(getLaunch('1'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })

    })
});
