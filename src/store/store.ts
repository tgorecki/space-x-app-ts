import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware, combineEpics } from "redux-observable";

import { rootReducer } from "../reducers"
import { searchEpic } from "../epics/launchesEpic";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

const rootEpic = combineEpics(searchEpic);
epicMiddleware.run(rootEpic);

export default AppStore
