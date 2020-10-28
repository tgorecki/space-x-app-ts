import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import AppStore from "./store/store";
import './styles.scss'

ReactDOM.render(
    <Provider store={AppStore}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
