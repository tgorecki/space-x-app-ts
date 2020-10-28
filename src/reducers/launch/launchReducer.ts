import { ISpaceXObject } from "../../global.types";
import { ILaunchState, TFetchLaunchActions } from "./launch.types";

const INITIAL_STATE: ILaunchState = {
    fetching: false,
    data: {} as ISpaceXObject,
    error: null
};

const reducer = (state = INITIAL_STATE, action: TFetchLaunchActions) => {
    switch (action.type) {
        case "FETCH_LAUNCH":
            return {
                ...state,
                fetching: true,
                error: null
            };
        case "FETCH_LAUNCH_FULFILLED":
            return {
                ...state,
                fetching: false,
                data: action.data,
                error: null
            };
        case "FETCH_LAUNCH_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.error
            };
        default:
            return state
    }
};

export default reducer;
