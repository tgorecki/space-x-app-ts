import React from 'react';
import { NavLink } from 'react-router-dom';
import { ISpaceXObject } from "../../../global.types";


const LaunchItem = ({ launchData }: { launchData: ISpaceXObject }) => {
    return (
        <NavLink to={`/launch/${launchData.id}`}>
            <p>{launchData.name}</p>
        </NavLink>
    );
};

export { LaunchItem };
