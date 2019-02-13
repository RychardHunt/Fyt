import {
  EDIT_SET,
  CHANGE_SET_COMPLETION_STATUS,
  INITIAL_STATE
} from "../config/settings";

export const editSet = (exercise, setNumber, reps, weight) => {
  return dispatch => {
    dispatch({
      type: EDIT_SET,
      payload: {
        exercise: exercise,
        setNumber: setNumber,
        reps: reps,
        weight: weight
      }
    });
  };
};

export const changeSetCompletionStatus = (exercise, setNumber) => {
  return dispatch => {
    dispatch({
      type: CHANGE_SET_COMPLETION_STATUS,
      payload: {
        exercise: exercise,
        setNumber: setNumber
      }
    });
  };
};
