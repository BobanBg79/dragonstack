import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { render } from "react-dom";
import thunk from "redux-thunk";
import Root from "./components/Root";
import rootReducer from "./reducers";
import { fetchAuthenticated } from "./actions/account";

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

store.dispatch(fetchAuthenticated()).then(() => {
  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById("root")
  );
});
