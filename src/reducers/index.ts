import { combineReducers } from "redux";
import LaunchesReducer from "./search/searchReducer"
import LaunchReducer from "../reducers/launch/launchReducer"

export const rootReducer = combineReducers({
    launch: LaunchReducer,
    launches: LaunchesReducer
});

