export const DEBUG_MODE_ON = false

export const EDIT_SET = "EDIT_SET";
export const ADD_EXERCISE = "ADD_EXERCISE";
export const ADD_SET = "ADD_SET";
export const CHANGE_SET_COMPLETION_STATUS="CHANGE_SET_COMPLETION_STATUS";
export const COLOR_1 = '#5DFC0A';
export const COLOR_2 = '#df2222';
export const INITIAL_STATE =  { workout:
   {"squat" :{
      1 : {
          "reps": 1,
          "weight": 90,
          "completed": false
      },
      2 : {
          "reps": 10,
          "weight": 340,
          "completed": false
      },
      3 : {
          "reps": 10,
          "weight": 350,
          "completed": false
      },
    },
    "Bench" :{
        1 : {
            "reps": 10,
            "weight": 100,
              "completed": false
        },
        2 : {
            "reps": 10,
            "weight": 100,
              "completed": false
        },
        3 : {
            "reps": 10,
            "weight": 100,
              "completed": false
        },
      },
      "Row" :{
          1 : {
              "reps": 10,
              "weight": 100,
                "completed": false

          },
          2 : {
              "reps": 10,
              "weight": 100,
                "completed": false
          },
          3 : {
              "reps": 10,
              "weight": 100,
                "completed": false
          },
        },


  }
}
