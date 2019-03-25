import { firebaseApp } from "../components/Onboard/utils/connectFirebase";

export const changeHeight = height => {
  let user = firebaseApp.auth().currentUser;
  if (user != undefined) {
    let uid = user.uid;
    firebaseApp
      .database()
      .ref("User/" + uid)
      .update({
        height
      });
  }
  console.log("changeHeight " + height);
  return {
    type: "CHANGE_HEIGHT",
    payload: {
      height: height
    }
  };
};

export const changeWeight = weight => {
  let user = firebaseApp.auth().currentUser;
  if (user != undefined) {
    let uid = user.uid;
    firebaseApp
      .database()
      .ref("User/" + uid)
      .update({
        weight
      });
  }
  console.log("changeWeight " + weight);
  return {
    type: "CHANGE_WEIGHT",
    payload: {
      weight: weight
    }
  };
};

export const changeAge = age => {
  let user = firebaseApp.auth().currentUser;
  if (user != undefined) {
    let uid = user.uid;
    firebaseApp
      .database()
      .ref("User/" + uid)
      .update({
        age
      });
  }
  console.log("changeAge " + age);
  return {
    type: "CHANGE_AGE",
    payload: {
      age: age
    }
  };
};

export const changeMode = mode => {
  let user = firebaseApp.auth().currentUser;
  if (user != undefined) {
    let uid = user.uid;
    firebaseApp
      .database()
      .ref("User/" + uid)
      .update({
        mode
      });
  }
  return {
    type: "CHANGE_MODE",
    payload: {
      mode: mode
    }
  };
};

export const changeStreak = streak => {
  let user = firebaseApp.auth().currentUser;
  if (user != undefined) {
    let uid = user.uid;
    firebaseApp
      .database()
      .ref("User/" + uid)
      .update({
        streak
      });
  }
  return {
    type: "CHANGE_STREAK",
    payload: {
      streak: streak
    }
  };
};
