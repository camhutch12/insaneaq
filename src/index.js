import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import combineReducers from './reducers/globalreducers'

/* 
Reference: https://reactjs.org/
Reference: https://react-redux.js.org/tutorials/connect
*/


ReactDOM.render(
//  Connects the Redux store to our application
  <Provider store={createStore(combineReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
