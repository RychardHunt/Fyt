import { INITIAL_STATE } from "../config/settings";

const initialState = INITIAL_STATE;

export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_WORKOUT":
      console.log(
        JSON.stringify(state) +
          "selected==================" +
          action.payload.selectedWorkout
      );
      return {
        ...state,
        selectedWorkout: action.payload.selectedWorkout
      };
    case "ADD_WORKOUT":
      console.log(JSON.stringify(state) + "aaaaa==================");
      return {
        ...state,
        [action.payload.workoutName]: action.payload.newWorkout
      };
    case "DELETE_SET":
      console.log(
        JSON.stringify(state) +
          "bbbbbbb==================" +
          action.payload.selectedWorkout +
          action.payload.exercise +
          action.payload.setNumber
      );
      delete state[action.payload.selectedWorkout][action.payload.exercise][
        action.payload.setNumber
      ];

      let len =
        Object.keys(
          state[action.payload.selectedWorkout][action.payload.exercise]
        ).length + 1;
      if (len != action.payload.setNumber) {
        for (let i = action.payload.setNumber; i < len; i++) {
          if (
            state[action.payload.selectedWorkout][action.payload.exercise][
              i + 1
            ]
          ) {
            state[action.payload.selectedWorkout][action.payload.exercise][i] =
              state[action.payload.selectedWorkout][action.payload.exercise][
                i + 1
              ];
          }
        }
        delete state[action.payload.selectedWorkout][action.payload.exercise][
          len
        ];
      }
      return {
        ...state
      };
    case "EDIT_SET":
      console.log(
        JSON.stringify(state) +
          "bbbbbbb==================" +
          action.payload.selectedWorkout +
          action.payload.exercise
      );
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
      console.log(
        JSON.stringify(state) +
          "bbbbbbb==================" +
          action.payload.selectedWorkout +
          action.payload.exercise +
          action.payload.setNumber
      );
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
        ...state,
        ...newState
      };
    case "DELETE_EXERCISE_NAME":
      console.log(JSON.stringify(state) + "ccccccc==================");
      delete state[action.payload.selectedWorkout][action.payload.exercise];
      return {
        ...state
      };
    default:
      return state;
  }
}
