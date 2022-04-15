import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import IndexReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";
import { BrowserRouter } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //remove window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ if you want to disable redux leakage

export const store = createStore(
  IndexReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware)) // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
