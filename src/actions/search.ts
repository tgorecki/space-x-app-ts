import {
    IData,
    ISearchAction,
    ISearchFulfilledAction,
    ISearchRejectedAction
} from "../reducers/search/search.types";
import { TOptions, TQueries, TSpaceXObjectType } from "../global.types";

export const search = (objectType: TSpaceXObjectType, offset: number, additionalQuery?: TQueries, additionalOptions?: TOptions): ISearchAction => ({
    type: "SEARCH",
    objectType,
    offset
});

export const searchFulfilled = (data: IData): ISearchFulfilledAction => ({
    type: "SEARCH_FULFILLED",
    data
});

export const searchRejected = (error: { message: string }): ISearchRejectedAction => ({
    type: "SEARCH_REJECTED",
    error
});
