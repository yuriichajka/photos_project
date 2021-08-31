import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import photoReducer from './ducks/images';

import { watcherSaga } from './rootSaga';

const reducer = combineReducers({
    images: photoReducer,
});

export type RootState = ReturnType<typeof reducer>

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
