import { Dispatch } from "redux";
import { TCrewActions } from "../reducers/crew/crew.types";
import * as spaceXApi from '../services/SpaceXService'

export const getCrew = (id: string) => async (dispatch: Dispatch<TCrewActions>) => {
    try {
        dispatch({ type: "FETCH_CREW" });
        const { data } = await spaceXApi.getDataByObjectId(id, "crew");
        dispatch({ type: "FETCH_CREW_FULFILLED", data })
    } catch (e) {
        dispatch({ type: "FETCH_CREW_REJECTED", error: e })
    }
};
