import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LaunchesList from "./components/LaunchesList/LaunchesList";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={LaunchesList}/>
            </Switch>
        </>
    )
}

export default App;
