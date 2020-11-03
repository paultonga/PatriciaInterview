import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import logger from 'redux-logger';

import AppReducer from './reducer';
import AppSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  app: AppReducer,
});

const middleware = applyMiddleware(sagaMiddleware, logger);

export const store = createStore(reducers, middleware);

const sagas = function*() {
  yield all([...AppSagas]);
};

sagaMiddleware.run(sagas);
