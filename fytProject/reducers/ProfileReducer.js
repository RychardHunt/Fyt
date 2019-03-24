import { PROFILE_STATE } from "../config/settings";

const initialState = PROFILE_STATE;

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_HEIGHT":
      return {
        ...state,
        height: action.payload.height
      };
    case "CHANGE_WEIGHT":
      return {
        ...state,
        weight: action.payload.weight
      };
    case "CHANGE_AGE":
      return {
        ...state,
        age: action.payload.age
      };
    case "CHANGE_MODE":
      return {
        ...state,
        mode: action.payload.mode
      };
    case "CHANGE_STREAK":
      return {
        ...state,
        streak: action.payload.streak
      };
    default:
      return state;
  }
}
