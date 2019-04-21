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
      console.log("state");
      return {
        ...state,
        authenticated: true
      };

    case "LOG_OUT":
      return {
        ...state,
        authenticated: false
      };

    case "SIGN_UP_SCREEN":
      return {
        ...state,
        signupscreen: !state.signupscreen
      };

    case "LOG_CHECK":
      alert("ayy");
      return {
        ...state,
        authenticated: action.payload.authenticated
      };

    default:
      return state;
  }
}
