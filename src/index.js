import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './containers/app';
import colors from './reducers/colors';

const initialState = [
  {id: 1, color: '#395889', isOpened: false, guessed: false},
  {id: 2, color: '#0cedda', isOpened: false, guessed: false},
  {id: 3, color: '#ab337f', isOpened: false, guessed: false},
  {id: 4, color: '#f29f33', isOpened: false, guessed: false},
  {id: 5, color: '#8FAE6F', isOpened: false, guessed: false},
  {id: 6, color: '#ab337f', isOpened: false, guessed: false},
  {id: 7, color: '#a86d32', isOpened: false, guessed: false},
  {id: 8, color: '#395889', isOpened: false, guessed: false},
  {id: 9, color: '#0cedda', isOpened: false, guessed: false},
  {id: 10, color: '#f29f33', isOpened: false, guessed: false},
  {id: 11, color: '#0d7506', isOpened: false, guessed: false},
  {id: 12, color: '#8FAE6F', isOpened: false, guessed: false},
  {id: 13, color: '#3d3429', isOpened: false, guessed: false},
  {id: 14, color: '#a86d32', isOpened: false, guessed: false},
  {id: 15, color: '#0d7506', isOpened: false, guessed: false},
  {id: 16, color: '#3d3429', isOpened: false, guessed: false}
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(colors, initialState, composeEnhancers());

ReactDOM.render(
  <App store={store} />,
  document.querySelector('.app')
);
