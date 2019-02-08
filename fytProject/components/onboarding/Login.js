import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  loginUser = (email, password) => {

  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          ref={input => (this.passwordInput = input)}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.loginUser(this.state.email, this.state.password)}>
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={ () => this.props.showRegistration()}
          >
        <Text style={styles.showRegistrationButton}> Click here to register</Text>

        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#c0392b',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  title: {
    paddingBottom: 90,
    textAlign: 'center',
    marginTop: 80,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 30,
    paddingHorizontal: 10,
  },
  showRegistrationButton: {
    fontSize: 18
  }
});
