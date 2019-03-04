export const changeHeight = height => {
  return {
    type: "CHANGE_HEIGHT",
    payload: {
      height: height
    }
  };
};

export const changeWeight = weight => {
  return {
    type: "CHANGE_WEIGHT",
    payload: {
      weight: weight
    }
  };
};

export const changeAge = age => {
  return {
    type: "CHANGE_AGE",
    payload: {
      age: age
    }
  };
};

export const changeStreak = streak => {
  return {
    type: "CHANGE_STREAK",
    payload: {
      streak: streak
    }
  };
};
