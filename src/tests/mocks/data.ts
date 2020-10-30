import { IData } from "../../reducers/search/search.types";

const results: IData = {
    docs: [
        {
            id: "5eb87cd9ffd86e000604b32a",
            name: "FalconSat",
        },
        {
            id: "5eb87cdaffd86e000604b32b",
            name: "DemoSat",
        }
    ],
    hasNextPage: true,
    hasPrevPage: false,
    limit: 50,
    nextPage: 2,
    offset: 0,
    page: 1,
    pagingCounter: 1,
    prevPage: null,
    totalDocs: 113,
    totalPages: 3,
}


export { results }
