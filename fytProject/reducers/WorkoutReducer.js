import { INITIAL_STATE } from "../config/settings";

const initialState = INITIAL_STATE;

export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_WORKOUT":
      return {
        ...state,
        selectedWorkout: action.payload.selectedWorkout
      };
    case "EDIT_SET":
      return {
        ...state,
        [action.payload.selectedWorkout]: {
          ...state[action.payload.selectedWorkout],
          [action.payload.exercise]: {
            ...state[action.payload.selectedWorkout][action.payload.exercise],
            [action.payload.setNumber]: {
              reps: action.payload.reps,
              weight: action.payload.weight
            }
          }
        }
      };
    case "CHANGE_SET_COMPLETION_STATUS":
      return {
        ...state,
        [action.payload.selectedWorkout]: {
          ...state[action.payload.selectedWorkout],
          [action.payload.exercise]: {
            ...state[action.payload.selectedWorkout][action.payload.exercise],
            [action.payload.setNumber]: {
              ...state[action.payload.selectedWorkout][action.payload.exercise][
                action.payload.setNumber
              ],
              completed: !state[action.payload.selectedWorkout][
                action.payload.exercise
              ][action.payload.setNumber].completed
            }
          }
        }
      };
    case "EDIT_EXERCISE_NAME":
      let newState = {};
      newState[action.payload.selectedWorkout] = {};
      for (let key in state[action.payload.selectedWorkout]) {
        if (key == action.payload.exercise) {
          newState[action.payload.selectedWorkout][
            action.payload.newExerciseName
          ] = state[action.payload.selectedWorkout][key];
        } else {
          newState[action.payload.selectedWorkout][key] =
            state[action.payload.selectedWorkout][key];
        }
      }
      return {
        ...newState
      };
    case "DELETE_EXERCISE_NAME":
      delete state[action.payload.selectedWorkout][action.payload.exercise];
      return {
        ...state
      };
    default:
      return state;
  }
}
