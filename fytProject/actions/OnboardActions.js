import * as firebase from "firebase";
const firebaseConfig = require("../components/Onboard/utils/firebaseconfig.json");
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const signUp = (email, password) => {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
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
    })
    .catch(error => alert(error));
};

export const logIn = (email, password) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login Successful!");
      return dispatch => {
        dispatch({
          type: LOG_IN,
          payload: {
            email: email,
            password: password
          }
        });
      };
    })
    .catch(error => alert(error));
};
