import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <StatusBar barStyle="light-content" />

        <TextInput
          placeholder="email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyLabel="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyLabel="go"
          onSubmitEditing={() => this.sample.focus()}
          style={styles.input}
          ref={input => (this.passwordInput = input)}
        />

        <TextInput
          placeholder="confirm password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyLabel="go"
          style={styles.input}
          ref={input => (this.sample = input)}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}> REGISTER </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e74c3c",
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.4)",
    marginBottom: 15,
    color: "#FFF",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#c0392b",
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  },
  title: {
    paddingBottom: 90,
    textAlign: "center",
    marginTop: 80,
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 30,
    paddingHorizontal: 10
  }
});
