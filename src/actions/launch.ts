import { Dispatch } from "redux";
import { TFetchLaunchActions } from "../reducers/launch/launch.types";
import * as spaceXApi from '../services/SpaceXService'

export const getLaunch = (id: string) => async (dispatch: Dispatch<TFetchLaunchActions>) => {
    dispatch({ type: "FETCH_LAUNCH" });
    try {
        const { data } = await spaceXApi.getDataByObjectId(id, "launches");
        dispatch({ type: "FETCH_LAUNCH_FULFILLED", data });
    } catch (error) {
        dispatch({ type: "FETCH_LAUNCH_REJECTED", error: { message: error.message } })
    }
};
