import { INITIAL_STATE } from "../config/settings";

const initialState = INITIAL_STATE;

export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case "EDIT_SET":
      return {
        ...state,
        [action.payload.exercise]: {
          ...state[action.payload.exercise],
          [action.payload.setNumber]: {
            reps: action.payload.reps,
            weight: action.payload.weight
          }
        }
      };
    case "CHANGE_SET_COMPLETION_STATUS":
      return {
        ...state,
        [action.payload.exercise]: {
          ...state[action.payload.exercise],
          [action.payload.setNumber]: {
            ...state[action.payload.exercise][action.payload.setNumber],
            completed: !state[action.payload.exercise][action.payload.setNumber]
              .completed
          }
        }
      };
    case "EDIT_EXERCISE_NAME":
      let newState = {};
      for (let key in state) {
        if (key == action.payload.exercise) {
          newState[action.payload.newExerciseName] = state[key];
        } else {
          newState[key] = state[key];
        }
      }
      return {
        ...newState
      };
    case "DELETE_EXERCISE_NAME":
      delete state[action.payload.exercise];
      return {
        ...state
      };
    default:
      return state;
  }
}
