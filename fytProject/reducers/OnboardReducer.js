const initialState = {
  authenticated: false,
  signup: false
};

export default function onboardReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        signup: action.payload.signup
      };

    case "LOG_IN":
      console.log(action.payload.authenticated);
      return {
        ...state,
        authenticated: action.payload.authenticated
      };

    case "LOG_OUT":
      console.log(action.payload.authenticated);
      return {
        ...state,
        authenticated: action.payload.authenticated
      };

    case "SIGN_UP_SCREEN":
      return {
        ...state,
        signupscreen: !state.signupscreen
      };

    case "LOG_CHECK":
      return {
        ...state,
        authenticated: action.payload.authenticated
      };

    default:
      return state;
  }
}
