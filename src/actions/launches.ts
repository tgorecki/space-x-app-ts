export const search = (offset: number):any => ({
  type: "SEARCH",
  offset
});

export const searchFulfilled = (data: any):any => ({
  type: "SEARCH_FULFILLED",
  data
});

export const searchRejected = (error: {message: string}):any => ({
  type: "SEARCH_REJECTED",
  error
});
