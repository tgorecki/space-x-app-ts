import { IData, ISearchAction, ISearchFulfilledAction, ISearchRejectedAction } from "../reducers/launches/launches.types";

export const search = (offset: number = 0): ISearchAction => ({
  type: "SEARCH",
  offset
});

export const searchFulfilled = (data: IData): ISearchFulfilledAction => ({
  type: "SEARCH_FULFILLED",
  data
});

export const searchRejected = (error: {message: string}): ISearchRejectedAction => ({
  type: "SEARCH_REJECTED",
  error
});
