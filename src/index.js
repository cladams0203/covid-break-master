import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import { cartReducer } from './reducers/cartReducer';
import combinedReducers from './reducers/combinedReducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(combinedReducers, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
