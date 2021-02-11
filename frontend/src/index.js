import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { render } from "react-dom";
import thunk from "redux-thunk";
import Generation from "./components/Generation";
import Dragon from "./components/Dragon";
import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("---Previous state: ", storeAPI.getState());
  console.log("Dispatching... ", action);
  let result = next(action);
  console.log("---Next state: ", storeAPI.getState());

  return result;
};

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, loggerMiddleware))
);

render(
  <Provider store={store}>
    <Fragment>
      <Generation />
      <Dragon />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);
