import { Reducer } from "redux";
import { TAction, ILaunchListState } from "./types";

const initialState: ILaunchListState = {
    fetching: false,
    data: { totalDocs: 0 },
    error: null
};

const reducer: Reducer<ILaunchListState, TAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "SEARCH":
            return {
                ...state,
                fetching: true,
                error: null
            };
        case "SEARCH_FULFILLED":
            return {
                ...state,
                fetching: false,
                data: action.data,
                error: null
            };
        case "SEARCH_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;
