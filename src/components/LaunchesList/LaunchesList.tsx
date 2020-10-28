import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "../../hooks/redux";
import { ILaunchListState } from "../../reducers/launches/types";
import { search } from "../../actions/launches";
import LaunchItem from "./LaunchItem/LaunchItem";
import { Pagination } from "../shared/Pagination/Pagination";
import { PaginationOperations } from "../shared/types";
import { _elementsLimit__ } from "../../constants/constants";


const LaunchesList: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { data, fetching, error } = useSelector(
        ({ launches }: { launches: ILaunchListState }) => {
            return {
                isLoading: launches.fetching,
                data: launches.data,
                error: launches.error
            };
        }
    ) as ILaunchListState;

    const { docs: launchesList, ...paginationAttributes } = data;

    React.useEffect(() => {
        dispatch(search())
    }, [dispatch]);


    const handlePageChange = (operation: PaginationOperations): void => {
        if (operation === PaginationOperations.nextPage) {
            dispatch(search(paginationAttributes!.offset! + _elementsLimit__))
        } else if (operation === PaginationOperations.previousPage) {
            dispatch(search(paginationAttributes!.offset! - _elementsLimit__))
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

export default LaunchesList;
