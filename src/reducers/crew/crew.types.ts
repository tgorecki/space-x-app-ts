import { Action } from "redux";
import { ISpaceXObject, TError } from "../../global.types";

export interface ICrewFetchAction extends Action<"FETCH_CREW"> {
}

export interface ICrewFetchFulfilledAction extends Action<"FETCH_CREW_FULFILLED"> {
    data: ISpaceXObject
}

export interface ICrewFetchRejected extends Action<"FETCH_CREW_REJECTED"> {
    error: TError
}

export type TCrewActions = ICrewFetchAction | ICrewFetchFulfilledAction | ICrewFetchRejected;

export interface ICrewState {
    fetching: boolean
    data: ISpaceXObject
    error: TError
}
