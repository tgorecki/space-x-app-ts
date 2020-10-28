import { spacexApi } from "./ClientInstance";
import { _elementsLimit__ } from "../constants/constants";

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


