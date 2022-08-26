import {applyMiddleware, compose, createStore} from "redux";
import reducers from './reducers';
import middleware from './middleware';
import services from '../services';

// dev tool
const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;


export const reduxStore = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware.map(f => f(services))))
);