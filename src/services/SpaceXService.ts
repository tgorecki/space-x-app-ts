import { spacexApi } from "./ClientInstance";
import { _elementsLimit__ } from "../constants/constants";
import { TSpaceXObjectType } from "../global.types";

//epic
export const getLaunches = (
    offset: number = 0
) => {
    return spacexApi.post("/launches/query", {
        "options": {
            "offset": offset,
            "limit": _elementsLimit__,
        }
    });
};


export const getDataByObjectType = async (id: string, objectType: TSpaceXObjectType) => {
    return spacexApi.get(`/${objectType}/${id}`);
};


