// Imports: Dependencies
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

// Imports: Redux
import rootReducer from "./reducers";

// Imports: Saga
import rootSaga from "./saga";

// Create MiddleWares
const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);

export default store;
