import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import workoutReducer from "./reducers/WorkoutReducer";
import onboardReducer from "./reducers/OnboardReducer";
import { DEBUG_MODE_ON } from "./config/settings";

const middleware = [thunk];
let store;
if (DEBUG_MODE_ON) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(onboardReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  console.log("else");
  store = createStore(onboardReducer, applyMiddleware(thunk));
  // store = createStore(onboardReducer);
}
export default store;
