import * as firebase from "firebase";
const firebaseConfig = require("../components/Onboard/utils/firebaseconfig.json");
const firebaseApp = firebase.initializeApp(firebaseConfig);
import store from "../store";

export const signUp = (email, password) => {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Your account was created!");
      return store.dispatch({
        type: "SIGN_UP",
        payload: {
          user: "user"
        }
      });
    })
    .catch(error => alert(error));
};

export const logIn = (email, password) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login Successful!");
      return store.dispatch({
        type: "LOG_IN",
        payload: {
          user: "user"
        }
      });
    })
    .catch(error => alert(error));
};

export const signUpScreen = () => {
  console.log("switch screen");
  return store.dispatch({
    type: "SIGN_UP_SCREEN"
  });
};
