import { spacexApi } from "./ClientInstance";
import { _elementsLimit__ } from "../constants/constants";
import { TOptions, TQueries, TSpaceXObjectType } from "../global.types";

const prepareOptions = (offset: number, additionOptions?: TOptions) => {
    const initialOptions: TOptions = {
        "offset": offset,
        "limit": _elementsLimit__,
    };
    return additionOptions ? { initialOptions, ...additionOptions } : initialOptions
};

//epic
export const getDataByQuery = (objectType: TSpaceXObjectType, offset: number,
                                           additionalQuery?: TQueries, additionalOptions?: TOptions) => {

    const options = prepareOptions(offset, additionalOptions);
    const query = additionalQuery ? additionalQuery : {};
    return spacexApi.post(`/${objectType}/query`, { options, query });
};


export const getDataByObjectId = async (id: string, objectType: TSpaceXObjectType) => {
    return spacexApi.get(`/${objectType}/${id}`);
};


