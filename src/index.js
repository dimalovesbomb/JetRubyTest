import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './containers/app';
import cards from './reducers/cards';
import initialState from './initial-state/';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(cards, initialState, composeEnhancers());
const store = createStore(cards, initialState);

ReactDOM.render(
  <App store={store} />,
  document.querySelector('.app')
);
