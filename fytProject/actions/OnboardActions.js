import { firebaseApp } from "../components/Onboard/utils/connectFirebase";
import { changeHeight, changeWeight, changeAge } from "./ProfileActions";
import store from "../store";
import { PROFILE_STATE } from "../config/settings";

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
          [uid]: PROFILE_STATE
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
          let obj = snapshot.val();
          store.dispatch(changeHeight(obj.height));
          store.dispatch(changeWeight(obj.weight));
          store.dispatch(changeAge(obj.age));
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
