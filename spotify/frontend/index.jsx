import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Success!</h1>, root);
});