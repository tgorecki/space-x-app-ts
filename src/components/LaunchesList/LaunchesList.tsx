import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from "../../hooks/redux";
import { ILaunchListState } from "../../reducers/launches/types";
import { search } from "../../actions/launches";
import LaunchItem from "./LaunchItem/LaunchItem";


const LaunchesList: FunctionComponent = () => {
    const [offset, setOffset] = useState(0);
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

    const handleOffsetChange = () => {
        setOffset((c) => c + 1)
    };


    React.useEffect(() => {
        dispatch(search(offset))
    }, [dispatch, offset]);


    let result = null;
    let totalResults = 0;

    if (fetching) {
        result = <div>Loading...</div>
    } else if (error) {
        result = <div>{error.message}</div>;
    } else if (data && data.docs) {
        result = data.docs.map(item => (
            <LaunchItem key={item.id} launchData={item}/>
        ));
    }
    return (
        <div>
            {result}
        </div>
    );
};

export default LaunchesList;
