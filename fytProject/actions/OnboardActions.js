import * as firebase from "firebase";
import { firebaseApp } from "../components/Onboard/utils/connectFirebase";
import {
  changeHeight,
  changeWeight,
  changeAge,
  changeGoal,
  changeStreak
} from "./ProfileActions";
import store from "../store";
import { Keyboard } from "react-native";
import { PROFILE_STATE } from "../config/settings";

const setDay = constant => {
  let answer = constant;
  let date = new Date();
  answer.year = date.getFullYear();
  answer.month = date.getMonth();
  answer.day = date.getDate();
  return answer;
};

const loadPreferences = data => {
  store.dispatch(changeHeight(data.height));
  store.dispatch(changeWeight(data.weight));
  store.dispatch(changeAge(data.age));
  store.dispatch(changeGoal(data.goal));
  store.dispatch(changeStreak(data.streak, data.year, data.month, data.day));
};

const onLogIn = () => AsyncStorage.setItem("AUTHENTICATED", "true");
const onLogOut = () => AsyncStorage.removeItem("AUTHENTICATED");
const isLoggedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("AUTHENTICATED")
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const signUp = (email, password, navigation) => {
  firebaseApp
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Your account was created!");
          let user = firebaseApp.auth().currentUser;
          let uid = user.uid;
          firebaseApp
            .database()
            .ref("User/")
            .update({
              [uid]: setDay(PROFILE_STATE)
            });
          store.dispatch({
            type: "SIGN_UP",
            payload: {
              signup: true
            }
          });
          Keyboard.dismiss();
          navigation.navigate("Intro");
        })
        .catch(error => alert(error));
    });
};

export const logIn = (email, password) => {
  firebaseApp
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("Login Successful!");
          let user = firebaseApp.auth().currentUser;
          let uid = user.uid;
          firebaseApp
            .database()
            .ref("User/" + uid)
            .once("value", function(snapshot) {
              loadPreferences(snapshot.val());
            });
          return dispatch => {
            dispatch({
              type: "LOG_IN",
              payload: {
                authenticated: "true",
                email: email,
                password: password
              }
            });
          };
        })
        .catch(error => alert(error));
    })
    .catch(error => alert(error));
};

export const logOut = () => {
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      alert("Logout  Successful!");
      return dispatch => {
        dispatch({
          type: "LOG_OUT",
          payload: {
            authenticated: "false",
            email: "",
            password: ""
          }
        });
      };
    })
    .catch(error => alert(error));
};

export const checkLogin = () => {
  return dispatch => {
    dispatch({
      type: "LOG_CHECK",
      payload: {
        authenticated: false
      }
    });
  };
};

export const signUpScreen = () => {
  console.log("switch screen");
  return store.dispatch({
    type: "SIGN_UP_SCREEN"
  });
};
