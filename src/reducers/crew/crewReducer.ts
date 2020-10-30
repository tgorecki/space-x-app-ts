import { ICrewState, TCrewActions } from "./crew.types";
import { ISpaceXObject } from "../../global.types";

const INITIAL_STATE: ICrewState = {
    fetching: false,
    data: {} as ISpaceXObject,
    error: null
};

const reducer = (state = INITIAL_STATE, action: TCrewActions) => {
    switch (action.type) {
        case "FETCH_CREW":
            return {
                ...state,
                fetching: true,
            };
        case "FETCH_CREW_FULFILLED":
            return {
                ...state,
                fetching: false,
                data: action.data,
            };
        case "FETCH_CREW_REJECTED":
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
