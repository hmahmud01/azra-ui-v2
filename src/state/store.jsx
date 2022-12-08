import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import reducers from "../reducers";

const persistConfig = {
  key: 'data',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

let comoseEnhancers = compose;
if (typeof window !== 'undefined') {
    comoseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
export const store = createStore(
    persistedReducer,
    {},
    comoseEnhancers(applyMiddleware(thunk)),
)

export const persistor = persistStore(store);