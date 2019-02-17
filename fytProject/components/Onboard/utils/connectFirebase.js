import * as firebase from "firebase";

const firebaseConfig = require("./firebaseconfig.json");

export const firebaseApp = firebase.initializeApp(fireBaseconfig);
