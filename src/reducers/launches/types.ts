import { Action } from "redux";

export interface IData {
    docs?: Array<ILaunch>;
    totalDocs?: number;
    offset?: number;
}

export interface ILaunch {
    id: string;
    [key: string]: any
}

export interface ISearchAction extends Action<"SEARCH"> {
    offset: number;
}

export interface ISearchFulfilledAction extends Action<"SEARCH_FULFILLED"> {
    data: IData;
}

export interface ISearchRejectedAction extends Action<"SEARCH_REJECTED"> {
    error: { message: string };
}

export type TAction = ISearchAction | ISearchFulfilledAction | ISearchRejectedAction;

export interface ILaunchListState {
    fetching: boolean;
    error: { message: string } | null;
    data: IData;
}
