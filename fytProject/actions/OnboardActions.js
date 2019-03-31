import { firebaseApp } from "../components/Onboard/utils/connectFirebase";
import {
  changeHeight,
  changeWeight,
  changeAge,
  changeGoal,
  changeStreak
} from "./ProfileActions";
import store from "../store";
import { PROFILE_STATE } from "../config/settings";

const setDay = constant => {
  let answer = constant;
  let date = new Date();
  answer.year = date.getFullYear();
  answer.month = date.getMonth();
  answer.day = date.getDate();
  return answer;
};

export const signUp = (email, password) => {
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

const loadPreferences = data => {
  store.dispatch(changeHeight(data.height));
  store.dispatch(changeWeight(data.weight));
  store.dispatch(changeAge(data.age));
  store.dispatch(changeGoal(data.goal));
  store.dispatch(changeStreak(data.streak, data.year, data.month, data.day));
};

export const logIn = (email, password) => {
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
