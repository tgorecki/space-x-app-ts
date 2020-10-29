import { search, searchFulfilled, searchRejected } from "../../actions/search";

describe('Search actions', () => {
    it("should create an fetch action", () => {
        const expectedAction = {
            type: "SEARCH",
            objectType: "launches",
            offset: 0
        };
        expect(search("launches", 0)).toEqual(expectedAction);
    });

    it('should create an action for fulfilled fetch', () => {
        const fetchedData = [{ id: "launch_id_1", name: "launch #1" }, { id: "launch_id_2", name: "launch #2" }];
        const expectedAction = {
            type: "SEARCH_FULFILLED",
            data: fetchedData
        };
        expect(searchFulfilled(fetchedData)).toEqual(expectedAction)
    });

    it('should creat an action for failed fetch', () => {
        const error = { message: 'Error while fetching' }
        const expectedAction = {
            type: "SEARCH_REJECTED",
            error
        };
        expect(searchRejected(error)).toEqual(expectedAction)
    })
});
