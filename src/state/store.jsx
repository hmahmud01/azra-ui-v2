import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import reducers from "../reducers";

let comoseEnhancers = compose;
if (typeof window !== 'undefined') {
    comoseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
export const store = createStore(
    reducers,
    {},
    comoseEnhancers(applyMiddleware(thunk)),
)