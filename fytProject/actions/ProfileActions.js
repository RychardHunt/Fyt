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
  return {
    type: "CHANGE_AGE",
    payload: {
      age: age
    }
  };
};

export const changeGoal = goal => {
  let user = firebaseApp.auth().currentUser;
  if (user != undefined) {
    let uid = user.uid;
    firebaseApp
      .database()
      .ref("User/" + uid)
      .update({
        goal
      });
  }
  return {
    type: "CHANGE_GOAL",
    payload: {
      goal: goal
    }
  };
};

/**
 *@TODO Update the Date for Database
 */
export const changeStreak = (oldStreak, year, month, day) => {
  let user = firebaseApp.auth().currentUser;
  let streak = parseInt(oldStreak);
  if (user != undefined) {
    let endOfMonth = [31, 56, 58, 93, 120, 153, 180, 217, 248, 270, 310, 330];
    let date = new Date();
    let regularStreak =
      year === date.getFullYear() &&
      month === date.getMonth() &&
      day === date.getDate() - 1;
    let monthPlus = month + 1;
    let endMonthStreak =
      endOfMonth.includes(monthPlus * day) &&
      monthPlus === date.getMonth() &&
      date.getDate() === 1;
    let endYearStreak =
      monthPlus * day === 372 &&
      date.getFullYear() === year + 1 &&
      date.getMonth() === 0 &&
      date.getDate() === 1;
    if (regularStreak || endMonthStreak || endYearStreak) {
      let uid = user.uid;
      streak = streak + 1;
      streak = streak.toString();
      firebaseApp
        .database()
        .ref("User/" + uid)
        .update({
          streak
        });
    }
  }
  return {
    type: "CHANGE_STREAK",
    payload: {
      streak: streak
    }
  };
};
