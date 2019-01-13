
import { createStore, applyMiddleware, compose } from 'redux';
import {getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import workoutReducer from './reducers/WorkoutReducer';
import {DEBUG_MODE_ON} from './config/settings';



const middleware = [thunk.withExtraArgument({getFirebase, getFirestore})];
let store;
if(DEBUG_MODE_ON){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(workoutReducer, composeEnhancers(applyMiddleware(...middleware)));
}
else {
  store = createStore(workoutReducer, applyMiddleware(...middleware));
}
export default store;
