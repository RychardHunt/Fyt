
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import workoutReducer from './reducers/WorkoutReducer';


const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(workoutReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
;
