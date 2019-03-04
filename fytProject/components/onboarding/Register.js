import React, { Component } from "react";
import {
  Alert,
  Platform,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { API_KEY } from "../../env";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "fytdatabase.firebaseapp.com",
  databaseURL: "https://fytdatabase.firebaseio.com",
  projectId: "fytdatabase",
  storageBucket: "fytdatabase.appspot.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordtwo: ""
    };
  }

  signupUser = (email, password, passwordtwo) => {
    if (password !== passwordtwo) {
      Alert.alert(
        "Password MisMatch",
        "Please reconfirm your password",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.alert(
            "Error",
            errorMessage,
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
          // ...
          return;
        });
      this.props.startOnboardingFunction();
    }

    //navigate it to the login page
  };

  loginUser = (email, password) => {};

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
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyLabel="go"
          onSubmitEditing={() => this.sample.focus()}
          style={styles.input}
          ref={input => (this.passwordInput = input)}
          onChangeText={password => this.setState({ password })}
        />

        <TextInput
          placeholder="confirm password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyLabel="go"
          style={styles.input}
          ref={input => (this.sample = input)}
          onChangeText={passwordtwo => this.setState({ passwordtwo })}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            this.signupUser(
              this.state.email,
              this.state.password,
              this.state.passwordtwo
            )
          }
        >
          <Text style={styles.buttonText}> REGISTER </Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => this.props.showLogin()}>
          <Text style={styles.showLoginButton}>
            {" "}
            Already a user? Click here to log in{" "}
          </Text>
        </TouchableHighlight>
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
  },
  showLoginButton: {
    fontSize: 18
  }
});
