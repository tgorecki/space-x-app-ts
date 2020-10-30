import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";
import * as spaceXApi from '../../services/SpaceXService'
import { getCrew } from "../../actions/crew";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Crew Actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({ data: {} })
    });

    it('should dispatch actions for fetch and fetch fulfilled', () => {
        const mockData = { "id": "1", "name": "Carl" };
        const expectedActions = [
            { type: "FETCH_CREW" },
            { type: "FETCH_CREW_FULFILLED", data: mockData }
        ];
        jest
            .spyOn(spaceXApi, "getDataByObjectId")
            .mockImplementation(() => Promise.resolve({ data: mockData }))

        return store.dispatch(getCrew("1"))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });

    it('should dispatch rejected action', () => {
        const expectedActions = [
            { type: "FETCH_CREW" },
            {
                type: "FETCH_CREW_REJECTED", error: { message: "Cannot fetched crew" }
            }
        ];
        jest
            .spyOn(spaceXApi, "getDataByObjectId")
            .mockImplementation(() => {
                throw new Error("Cannot fetched crew")
            });

        return store.dispatch(getCrew("1")).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
