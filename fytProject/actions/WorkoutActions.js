import {EDIT_SET} from '../config/settings';

export const editSet = (exercise, setNumber, reps, weight) => {
  return (dispatch) => {
   dispatch({
     type: "EDIT_SET",
     payload: {
       exercise: exercise,
       setNumber: setNumber,
       reps: reps,
       weight: weight

     }

   });

 }

}
