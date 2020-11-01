import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ResultSet } from './SpaceXLaunch/Results/index'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { CombineReducers } from './SpaceXLaunch/Reducers';
import { ConnectJsx } from './SpaceXLaunch/container';
const store = createStore(CombineReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectJsx />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
