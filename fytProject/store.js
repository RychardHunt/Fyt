import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import workout from "./reducers/WorkoutReducer";
import profile from "./reducers/ProfileReducer";
import { DEBUG_MODE_ON } from "./config/settings";

const middleware = [thunk];
let store;
const rootReducer = combineReducers({ workout, profile });

if (DEBUG_MODE_ON) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(...middleware));
  window.store = store;
}

export default store;
