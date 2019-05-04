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
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
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
};

export const logIn = (email, password, navigation) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      let user = firebaseApp.auth().currentUser;
      let uid = user.uid;
      firebaseApp
        .database()
        .ref("User/" + uid)
        .once("value", function(snapshot) {
          loadPreferences(snapshot.val());
        });
      store.dispatch({
        type: "LOG_IN",
        payload: {
          authenticated: true
        }
      });
      Keyboard.dismiss();
      navigation.navigate("Tab1");
    })
    .catch(error => alert(error));
};

export const logOut = navigation => {
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      loadPreferences(PROFILE_STATE);
      store.dispatch({
        type: "LOG_OUT",
        payload: {
          authenticated: false
        }
      });
      navigation.navigate("Welcome");
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
