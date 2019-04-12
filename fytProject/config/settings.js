import { Dimensions } from "react-native";

export const DEBUG_MODE_ON = false;
export const ONBOARDING = true;
export const EDIT_SET = "EDIT_SET";
export const CHANGE_SET_COMPLETION_STATUS = "CHANGE_SET_COMPLETION_STATUS";
export const COLOR_1 = "#5DFC0A";
export const COLOR_2 = "#df2222";
export const DEVICE_HEIGHT = Dimensions.get("screen").height;
export const DEVICE_WIDTH = Dimensions.get("screen").width;

export const PROFILE_STATE = {
  height: "---",
  weight: "---",
  age: "---",
  streak: "---",
  goal: "---"
};

export const INITIAL_STATE = {
  selectedWorkout: "defaultWorkout",
  defaultWorkout: {
    squat: {
      1: {
        reps: 1,
        weight: 90,
        completed: false
      },
      2: {
        reps: 10,
        weight: 340,
        completed: false
      },
      3: {
        reps: 10,
        weight: 350,
        completed: false
      }
    },
    Bench: {
      1: {
        reps: 10,
        weight: 100,
        completed: false
      },
      2: {
        reps: 10,
        weight: 100,
        completed: false
      },
      3: {
        reps: 10,
        weight: 100,
        completed: false
      }
    },
    Row: {
      1: {
        reps: 10,
        weight: 100,
        completed: false
      },
      2: {
        reps: 10,
        weight: 100,
        completed: false
      },
      3: {
        reps: 10,
        weight: 100,
        completed: false
      }
    }
  },
  lightWorkout: {
    Bench: {
      1: {
        reps: 10,
        weight: 100,
        completed: false
      },
      2: {
        reps: 10,
        weight: 100,
        completed: false
      },
      3: {
        reps: 10,
        weight: 100,
        completed: false
      }
    }
  }
};
