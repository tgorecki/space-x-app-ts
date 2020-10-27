import { spacexApi } from "./ClientInstance";

export const getLaunches = (
    offset: number = 0
) => {
    return spacexApi.post("/launches/query", {
        "options": {
            "offset": offset,
            "limit": 2,
        }
    });
};


