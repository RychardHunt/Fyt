export const editSet = (exercise, setNumber, reps, weight) => {
  return dispatch => {
    dispatch({
      type: "EDIT_SET",
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
      type: "CHANGE_SET_COMPLETION_STATUS",
      payload: {
        exercise: exercise,
        setNumber: setNumber
      }
    });
  };
};

export const editExerciseName = (exercise, newExerciseName) => {
  return dispatch => {
    dispatch({
      type: "EDIT_EXERCISE_NAME",
      payload: {
        exercise: exercise,
        newExerciseName: newExerciseName
      }
    });
  };
};

export const deleteExercise = exercise => {
  return dispatch => {
    dispatch({
      type: "DELETE_EXERCISE_NAME",
      payload: {
        exercise: exercise
      }
    });
  };
};
