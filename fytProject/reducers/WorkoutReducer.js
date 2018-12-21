import {EDIT_SET} from '../config/settings';

const initialState = {
  workout: {"squat" :{
      1 : {
          "reps": 10,
          "weight": 300
      },
      2 : {
          "reps": 10,
          "weight": 340
      },
      3 : {
          "reps": 10,
          "weight": 350
      },
    }
  }
};
export default function workoutReducer(state=initialState, action){
   switch(action.type){
     case "EDIT_SET":
      return {
        ...state,
        workout: {
        ...state.workout,
        [action.payload.exercise] : {
          ...state.workout[action.payload.exercise],
          [action.payload.setNumber]:{
            reps: action.payload.reps,
            weight: action.payload.weight
          }

        }
      }
      }


     default:
        return state;
   }

}
