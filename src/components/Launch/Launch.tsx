import React, { FunctionComponent, useEffect, } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks/redux";
import { ILaunchState } from "../../reducers/launch/launch.types";
import { getLaunch } from "../../actions/launch";

const Launch: FunctionComponent<RouteComponentProps<{ id: string }>> = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const { fetching, data, error } = useSelector(({ launch }: { launch: ILaunchState }) => {
        return {
            fetching: launch.fetching,
            data: launch.data,
            error: launch.error
        }
    }) as ILaunchState;


    useEffect(() => {
        dispatch(getLaunch(id))
    }, [dispatch, id]);

    useEffect(() => {
        return () => {
        }
    }, []);

    const renderContent = () => {
        if (fetching) return <div>Loading</div>;
        else if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
        else if (error) return <pre>Error: {JSON.stringify(error)}</pre>;
    };

    return (
        <div>{renderContent()}</div>
    )
};

export default React.memo(Launch)
