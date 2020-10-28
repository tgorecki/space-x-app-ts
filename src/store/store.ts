import { applyMiddleware, compose, createStore, Store } from 'redux'
import { createEpicMiddleware, combineEpics } from "redux-observable";

import { rootReducer } from "../reducers"
import { searchEpic } from "../epics/searchEpic";
import ReduxThunk from "redux-thunk"
import { AppState } from "../global.types";

const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware, ReduxThunk];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares))) as Store<AppState>;

const rootEpic = combineEpics(searchEpic);
epicMiddleware.run(rootEpic);

export default AppStore
