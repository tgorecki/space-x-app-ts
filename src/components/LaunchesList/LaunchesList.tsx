import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ILaunchListState } from "../../reducers/search/search.types";
import { search } from "../../actions/search";
import { LaunchItem } from "./LaunchItem/LaunchItem";
import { Pagination } from "../shared/Pagination/Pagination";
import { PaginationOperations } from "../shared/Pagination/pagination.types";
import { _elementsLimit__ } from "../../constants/constants";


const LaunchesList: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { data, fetching, error } = useSelector(
        ({ launches }: { launches: ILaunchListState }) => {
            return {
                fetching: launches.fetching,
                data: launches.data,
                error: launches.error
            };
        }
    ) as ILaunchListState;

    const { docs: launchesList, ...paginationAttributes } = data;

    useEffect(() => {
        dispatch(search("launches", 0))
    }, [dispatch]);

    useEffect(() => {
        return () => {

        }
    },[]);


    const handlePageChange = (operation: PaginationOperations): void => {
        if (operation === PaginationOperations.nextPage) {
            dispatch(search("launches", paginationAttributes!.offset! + _elementsLimit__,))
        } else if (operation === PaginationOperations.previousPage) {
            dispatch(search("launches", paginationAttributes!.offset! - _elementsLimit__,))
        }
        return
    };

    const renderContent = () => {
        if (fetching) {
            return <div>Loading...</div>
        } else if (error) {
            return <div>{error.message}</div>;
        } else if (data.docs) {
            return data.docs.map(item => (
                <LaunchItem key={item.id} launchData={item}/>
            ));
        }
    };


    return (
        <div>
            {renderContent()}
            <Pagination handlePageChange={handlePageChange}
                        {...paginationAttributes}/>
        </div>
    );
};

export { LaunchesList };
