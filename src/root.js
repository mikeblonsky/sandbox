import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from "redux-promise";
import reducers from './reducers/reducers';

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(reducers, enhancers, compose(
    applyMiddleware(promise, thunk)
));

export default (props) => {
    return (
        <Provider store={store}>
           {props.children}
        </Provider>
    )
}