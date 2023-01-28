// This module will create the Store for redux

import reducers from './reducers';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

let createStoreMiddleware = null;

createStoreMiddleware = applyMiddleware(loggerMiddleware)(createStore);

export default createStoreMiddleware(reducers);
