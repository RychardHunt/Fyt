import React from "react";
import { StyleSheet } from "react-native";
import { Constants } from "expo";
export const backgroundColor = "#303030";
export const headerColor = "#B71C1C";
export const selectedColor = "#801313";

export const colorTheme = StyleSheet.create({
  bg_dark: {
    backgroundColor: "#303030"
  },
  header: {
    backgroundColor: "#B71C1C"
  }
});

export const containerStyle = StyleSheet.create({
  containerStyle: {
    top: Constants.statusBarHeight
  }
});
