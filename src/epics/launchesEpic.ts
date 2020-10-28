import { from, of } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, switchMap, map } from "rxjs/operators";
import { searchFulfilled, searchRejected } from "../actions/launches";
import * as SpaceXService from '../services/SpaceXService'
import { ISearchAction } from "../reducers/launches/types";


export const searchEpic = (action$: any) =>
    action$.pipe(
        ofType("SEARCH"),
        switchMap((action: ISearchAction) =>
            from(SpaceXService.getLaunches(action.offset)).pipe(
                map((response: any) => searchFulfilled(response.data)),
                catchError(error => {
                    return of(searchRejected(error));
                })
            )
        )
    );