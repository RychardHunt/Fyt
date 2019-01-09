import {EDIT_SET, CHANGE_SET_COMPLETION_STATUS, INITIAL_STATE, ADD_EXERCISE} from '../config/settings';
import {numberOfSetsInExercise} from '../config/utilities';


export const addExercise = (exercise) => {
  return (dispatch) => {
    dispatch({
      type: ADD_EXERCISE,
      payload: {
        exercise: exercise
      }
    })
  }
}

export const addSet = (reps, weight, exercise) => {
  const setNumber = numberOfSetsInExercise(exercise)+1;
  return (dispatch) => {
    dispatch({
      type: EDIT_SET,
      payload: {
        exercise: exercise,
        setNumber: setNumber,
        reps: reps,
        weight: weight

      }
    })
  }
}

export const editSet = (exercise, setNumber, reps, weight) => {
  return (dispatch) => {
   dispatch({
     type: EDIT_SET,
     payload: {
       exercise: exercise,
       setNumber: setNumber,
       reps: reps,
       weight: weight

     }

   });

 }

}

export const changeSetCompletionStatus = (exercise, setNumber) => {
  return (dispatch) => {
   dispatch({
     type: CHANGE_SET_COMPLETION_STATUS,
     payload: {
       exercise: exercise,
       setNumber: setNumber,
     }

   });

 }

}
