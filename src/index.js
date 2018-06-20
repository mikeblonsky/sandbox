import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from "redux-promise";

import App1 from './container/container';
import reducers from './reducers/reducers';

const store = createStore(reducers, compose(
    applyMiddleware(promise, thunk)
));
    


ReactDOM.render(<Provider store={store}>
  <App1 />
</Provider>, document.querySelector('.page'));
