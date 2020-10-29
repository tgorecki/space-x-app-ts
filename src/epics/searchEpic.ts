import { from, of } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, switchMap, map } from "rxjs/operators";
import { searchFulfilled, searchRejected } from "../actions/search";
import * as SpaceXService from '../services/SpaceXService'
import { ISearchAction } from "../reducers/search/search.types";


export const searchEpic = (action$: any) =>
    action$.pipe(
        ofType("SEARCH"),
        switchMap((action: ISearchAction) =>
            from(SpaceXService.getDataByQuery(action.objectType, action.offset, action.additionalQuery, action.additionalOptions))
                .pipe(
                    map((response) => searchFulfilled(response.data)),
                    catchError(error => {
                        return of(searchRejected(error));
                    })
                )
        )
    );
