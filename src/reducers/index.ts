import { combineReducers } from "redux";
import LaunchesReducer from "../reducers/launches/launchesReducer"
import LaunchReducer from "../reducers/launch/launchReducer"

export const rootReducer = combineReducers({
    launch: LaunchReducer,
    launches: LaunchesReducer
});

