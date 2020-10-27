import { combineReducers } from "redux";
import LaunchesReducer from "../reducers/launches/launchesReducer"

export const rootReducer = combineReducers({
    launches: LaunchesReducer
});

