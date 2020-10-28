import { Action } from "redux";
import { IPaginationAttributes } from "../../components/shared/Pagination/pagination.types";
import { ISpaceXObject } from "../../global.types";


export interface IData extends IPaginationAttributes{
    docs?: Array<ISpaceXObject>
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

export type TSearchActions = ISearchAction | ISearchFulfilledAction | ISearchRejectedAction;

export interface ILaunchListState {
    fetching: boolean;
    error: { message: string } | null;
    data: IData;
}
