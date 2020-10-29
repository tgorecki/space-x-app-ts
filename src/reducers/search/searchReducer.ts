import { Reducer } from "redux";
import { TSearchActions, ILaunchListState, IData } from "./search.types";

const initialState: ILaunchListState = {
    fetching: false,
    data: {
        totalDocs: 0,
    } as IData,
    error: null
};

const reducer: Reducer<ILaunchListState, TSearchActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "SEARCH":
            return {
                ...state,
                fetching: true,
            };
        case "SEARCH_FULFILLED":
            return {
                ...state,
                fetching: false,
                data: action.data,
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
