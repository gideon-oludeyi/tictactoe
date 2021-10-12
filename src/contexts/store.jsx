import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import middlewares from '../middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));

export function ReactReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
