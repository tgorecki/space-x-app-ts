import { ILaunchListState } from "./reducers/launches/launches.types";
import { ILaunchState } from "./reducers/launch/launch.types";

export type TSpaceXObjectType = 'launches' | 'cores' | 'capsules' | 'crew' | 'launchpads' | 'payloads' | 'rockets'

export interface ISpaceXObject {
    id: string;
    [key: string]: any
}

export interface AppState {
    launches: ILaunchListState
    launch: ILaunchState
}

export type TError = { message: string } | null

export type TQueries = {
    [key: string]: any
}

export type TOptions = {
    select?: any
    sort?: any
    offset?: number
    page?: number
    limit?: number
    pagination?: boolean
    populate?: any

}
