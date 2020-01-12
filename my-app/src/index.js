import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import newReducer from "./redux-files/reducer";
import { myMiddleware } from "./redux-files/middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    newReducer,
    storeEnhancers(applyMiddleware(myMiddleware))
);
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
