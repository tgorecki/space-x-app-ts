import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LaunchesList } from "./components/LaunchesList/LaunchesList";
import Launch from "./components/Launch/Launch";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={LaunchesList}/>
                <Route path="/launch/:id" exact component={Launch}/>
                <Redirect to="/"/>
            </Switch>
        </React.Fragment>
    )
}


export default App;
