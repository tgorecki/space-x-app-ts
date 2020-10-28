import React, { FunctionComponent } from 'react';

type TProps = {
    id: string
}

//IN PROGRESS
const Crew: FunctionComponent<TProps> = (props) => {
    return (
        <div>
            Crew {props.id}
        </div>
    );
};

export default React.memo(Crew);
