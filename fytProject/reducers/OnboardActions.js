const initialState = {
  authenticated: False
};

export default function onboardReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        authenticated: action.payload.authenticated
      };

    default:
      return state;
  }
}

console.log(onboardReducer());
