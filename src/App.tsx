import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LaunchesList from "./components/LaunchesList/LaunchesList";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={LaunchesList}/>
            </Switch>
        </React.Fragment>
    )
}

export default App;
