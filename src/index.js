import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/app.scss';
import 'whatwg-fetch'
/*
ReactDOM.render(
  <App />
, document.getElementById('main'))
*/
ReactDOM.render(
  <App />
  , document.querySelector('#main')
);
