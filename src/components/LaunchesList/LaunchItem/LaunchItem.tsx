import React from 'react';
import { NavLink } from 'react-router-dom';
import { ILaunch } from "../../../reducers/launches/types";


const LaunchItem = ({ launchData }: { launchData: ILaunch }) => {
    return (
        <div>
            <p>{launchData.name}</p>
        </div>
    );
};

export default LaunchItem;
