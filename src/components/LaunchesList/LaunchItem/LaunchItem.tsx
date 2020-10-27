import React from 'react';
import { NavLink } from 'react-router-dom';
import { ILaunch } from "../../../reducers/launches/types";


const LaunchItem = ({ launchData }: { launchData: ILaunch }) => {
    return (
        <NavLink to={`/launch/${launchData.id}`} activeClassName="active">
            <div className="recipe-item p-2  d-flex align-items-start justify-content-start flex-column flex-lg-row ">
                <img src={launchData.links.patch.small} height="40" alt={launchData.name}/>
                <div>
                    <h1>{launchData.name}</h1>
                    <a href={launchData.links.webcast}>Launch video</a>
                </div>
            </div>
        </NavLink>
    );
};

export default LaunchItem;
