import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from "redux-promise";

import App from './components/app';
import reducers from './reducers/reducers';

const store = createStore(reducers, compose(
    applyMiddleware(promise, thunk)
));
    


ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.querySelector('.page'));
