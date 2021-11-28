import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchReducer } from "./reducers/searchReducer";
export const localStorageKey = "reduxState";

const middlewares = [thunk];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const rootReducer = combineReducers({
  search: searchReducer,
});

// TODO: initialState from localStorage
const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
