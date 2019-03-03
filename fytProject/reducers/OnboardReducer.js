const initialState = {
  authenticated: false,
  signupscreen: false
};

export default function onboardReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      console.log("sign _ up");
      return {
        ...state,
        authenticated: true
      };

    case "LOG_IN":
      console.log("log _ in");
      console.log({
        ...state,
        authenticated: true
      });
      console.log("state");
      return {
        ...state,
        authenticated: true
      };

    case "SIGN_UP_SCREEN":
      console.log("switch _ screen");
      console.log({
        ...state,
        signupscreen: !state.signupscreen
      });
      return {
        ...state,
        signupscreen: !state.signupscreen
      };

    default:
      console.log("default");
      return state;
  }
}
