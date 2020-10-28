import { Action } from "redux";
import { IPaginationAttributes } from "../../components/shared/Pagination/pagination.types";
import { ISpaceXObject, TSpaceXObjectType } from "../../global.types";


export interface IData extends IPaginationAttributes{
    docs?: Array<ISpaceXObject>
}

export interface ISearchAction extends Action<"SEARCH"> {
    objectType: TSpaceXObjectType
    offset: number;
    additionalQuery?: any
    additionalOptions?: any
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
