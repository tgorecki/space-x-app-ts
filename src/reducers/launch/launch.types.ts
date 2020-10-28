import { Action } from "redux";
import { ISpaceXObject, TError } from "../../global.types";


export interface IFetchLaunchAction extends Action<"FETCH_LAUNCH"> {
}

export interface IFetchLaunchFulfilledAction extends Action<"FETCH_LAUNCH_FULFILLED"> {
    data: ISpaceXObject
}

export interface IFetchLaunchRejectedAction extends Action<"FETCH_LAUNCH_REJECTED"> {
    error: TError
}

export type TFetchLaunchActions = IFetchLaunchAction | IFetchLaunchFulfilledAction | IFetchLaunchRejectedAction

export interface ILaunchState {
    fetching: false,
    data: ISpaceXObject,
    error: TError
}
