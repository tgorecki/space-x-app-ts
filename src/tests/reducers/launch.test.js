import launchReducer from "../../reducers/launch/launchReducer";
import { results } from "../mocks/data";


describe('Launch reducer', () => {
    const INITIAL_STATE = {
        fetching: false,
        data: {},
        error: null
    };

    beforeEach(() => {
    });


    it('handles action of type FETCH_LAUNCH', () => {
        const action = {
            type: "FETCH_LAUNCH",
        };
        const newState = launchReducer(INITIAL_STATE, action);
        expect(newState).toEqual({ ...INITIAL_STATE, fetching: true })
    });

    it('handles action of type FETCH_LAUNCH_FULFILLED', () => {
        const action = {
            type: "FETCH_LAUNCH_FULFILLED",
            data: results['docs'][0]
        };
        const newState = launchReducer(INITIAL_STATE, action);
        expect(newState).toEqual({ ...INITIAL_STATE, data: results['docs'][0] });
    });

    it('handles action of type  FETCH_LAUNCH_REJECTED', () => {
        const action = {
            type: "FETCH_LAUNCH_REJECTED",
            error: { message: "Error while fetching launch" }
        };

        const newState = launchReducer(INITIAL_STATE, action);
        expect(newState).toEqual({ ...INITIAL_STATE, error: { message: "Error while fetching launch" } })
    });

    it('handles action of unknown type', () => {
        const newState = launchReducer(INITIAL_STATE, { type: "WRONG_ACTION" });
        expect(newState).toEqual(INITIAL_STATE)
    });
});
