import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from 'redux-logger';
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "./root-saga";

// root reducer

// saga middleware setup

const sagaMiddleware = createSagaMiddleware()

// Redux persist config

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk, sagaMiddleware].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga)

export const persister = persistStore(store);
