import crewReducer from "../../reducers/crew/crewReducer";

const INITIAL_STORE = {
    fetching: false,
    data: {},
    error: null
}

describe('Crew Reducer', () => {
    it('handles action of type FETCH_CREW', () => {
        const action = { type: "FETCH_CREW" }
        const newState = crewReducer(INITIAL_STORE, action)
        expect(newState).toEqual({ ...INITIAL_STORE, fetching: true })
    });

    it('handles action of type FETCH_CREW_FULFILLED', () => {
        const data = { data: { "id": 1, "name": "Carl" } };
        const action = { type: "FETCH_CREW_FULFILLED", data };
        const newState = crewReducer(INITIAL_STORE, action);
        expect(newState).toEqual({ ...INITIAL_STORE, data })
    });

    it('handles action of type FETCH_CREW_REJECTED', () => {
        const action = { type: "FETCH_CREW_REJECTED", error: { message: "err" } };
        const newState = crewReducer(INITIAL_STORE, action);
        expect(newState).toEqual({ ...INITIAL_STORE, error: { message: "err" } })
    });

    it('handles action of type UNKNOWN', () => {
        const action = { type: "UNKNOWN_ACTION" }
        const newState = crewReducer(INITIAL_STORE, action);
        expect(newState).toEqual(INITIAL_STORE)
    });
});
