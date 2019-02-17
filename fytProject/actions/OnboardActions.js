import * as firebase from "firebase";
const firebaseConfig = require("../components/Onboard/utils/firebaseconfig.json");
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const signUp = (email, password) => {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      // then and catch are methods that we call on the Promise returned from
      // createUserWithEmailAndPassword
      alert("Your account was created!");
      return dispatch => {
        dispatch({
          type: SIGN_UP,
          payload: {
            authenticated: True,
            password: password
          }
        });
      };
    });
};

export const logIn = (email, password) => {
  return dispatch => {
    dispatch({
      type: LOG_IN,
      payload: {
        email: email,
        password: password
      }
    });
  };
};
