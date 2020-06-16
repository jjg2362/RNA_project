import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Head from "next/head";
import propTypes from "prop-types";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const RNA = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>RNA</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&amp;subset=korean"
          rel="stylesheet"
        />
      </Head>
      <Component />
    </Provider>
  );
};

RNA.propTypes = {
  Component: propTypes.elementType.isRequired,
  store: propTypes.object.isRequired,
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
        );
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(RNA);
