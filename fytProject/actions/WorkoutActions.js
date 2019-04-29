export const changeWorkout = selectedWorkout => {
  return dispatch => {
    dispatch({
      type: "CHANGE_WORKOUT",
      payload: {
        selectedWorkout: selectedWorkout
      }
    });
  };
};

export const addWorkout = (newWorkout, workoutName) => {
  return dispatch => {
    dispatch({
      type: "ADD_WORKOUT",
      payload: {
        newWorkout,
        workoutName
      }
    });
  };
};

export const deleteSet = (exercise, setNumber, selectedWorkout) => {
  console.log("dete set");
  return dispatch => {
    dispatch({
      type: "DELETE_SET",
      payload: {
        exercise: exercise,
        setNumber: setNumber,
        selectedWorkout: selectedWorkout
      }
    });
  };
};

export const editSet = (exercise, setNumber, reps, weight, selectedWorkout) => {
  return dispatch => {
    dispatch({
      type: "EDIT_SET",
      payload: {
        exercise: exercise,
        setNumber: setNumber,
        reps: reps,
        weight: weight,
        selectedWorkout: selectedWorkout
      }
    });
  };
};

export const changeSetCompletionStatus = (
  exercise,
  setNumber,
  selectedWorkout
) => {
  return dispatch => {
    dispatch({
      type: "CHANGE_SET_COMPLETION_STATUS",
      payload: {
        exercise: exercise,
        setNumber: setNumber,
        selectedWorkout: selectedWorkout
      }
    });
  };
};

export const editExerciseName = (
  exercise,
  newExerciseName,
  selectedWorkout
) => {
  return dispatch => {
    dispatch({
      type: "EDIT_EXERCISE_NAME",
      payload: {
        exercise: exercise,
        newExerciseName: newExerciseName,
        selectedWorkout: selectedWorkout
      }
    });
  };
};

export const deleteExercise = (exercise, selectedWorkout) => {
  return dispatch => {
    dispatch({
      type: "DELETE_EXERCISE_NAME",
      payload: {
        exercise: exercise,
        selectedWorkout: selectedWorkout
      }
    });
  };
};
