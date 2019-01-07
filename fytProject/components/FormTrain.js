import * as React from 'react';
import {ONBOARDING,STARTSTEP} from '../config/settings';
import { FileSystem } from 'expo';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { Button, Card, Text, View, Form, Item, Input } from 'native-base';
if (!ONBOARDING){
STARTSTEP="ONBOARDING_FINISHED";}

 
 export default class FormTrain extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      statistic: '',
      counter: 0,
      typeholder: this.props.type,
      nameholder: this.props.name,
      inputholder: [],
      offsetX: new Animated.Value(0),
      step: STARTSTEP //LOGINSIGNUP:login/signup SIGNUP:registration ONBOARDING_FINISHED:onboarding LOGIN:login
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);

    this.handleLoginSubmitClick = this.handleLoginSubmitClick.bind(this);
  }
 
  async finalSequence(namearray, typearray, inputarray) {
    var jsonobject = {};
    for (var i = 0; i < inputarray.length; i++) {
      jsonobject[namearray[i]] = inputarray[i];
    }
    var jsonobjectstring = JSON.stringify(jsonobject);
    if (onboardingvar == true) {
      this.setState({
        step: "ONBOARDING_FINISHED"
      });
    } else {
      console.log('Go to final screen');
    }
  }
  handleClick(event) {
    console.log(this.props.name);
    let tempholder = this.state.inputholder.slice();
    tempholder[this.state.counter] = this.state.statistic;
    if (this.state.counter < this.state.nameholder.length - 1) {
      this.setState({
        inputholder: tempholder,
        counter: this.state.counter + 1,
        statistic: ''
      });

      Animated.sequence([
        Animated.timing(this.state.offsetX, { toValue: -500, duration: 500 }),
        Animated.timing(this.state.offsetX, { toValue: 500, duration: 0 }),
        Animated.timing(this.state.offsetX, { toValue: 0, duration: 500 })
      ]).start();
    } else {
      this.setState({
        inputholder: tempholder,
        counter: this.state.counter + 1,
        statistic: ''
      });
      this.finalSequence(this.state.nameholder, this.state.typeholder, this.state.inputholder);
    }
   }
 
  handleBackClick(event) {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
      Animated.sequence([
        Animated.timing(this.state.offsetX, { toValue: 500, duration: 500 }),
        Animated.timing(this.state.offsetX, { toValue: -500, duration: 0 }),
        Animated.timing(this.state.offsetX, { toValue: 0, duration: 500 })
      ]).start();
    }
  }
  handleSkipClick(event) {
    this.finalSequence(this.state.nameholder, this.state.typeholder, this.state.inputholder);
  }
  handleLoginClick(event) {
    console.log('Go to login screen');
    this.setState({ step: "LOGIN" });
  }
 
  handleSignupClick(event) {
    console.log('Go to registration screen');
    this.setState({ step: "SIGNUP" });
  }
 
  handleRegistrationBackClick(event) {
    console.log('Go to login/signup screen');
    this.setState({ step: "LOGINSIGNUP" });
  }
 
  handleLoginSubmitClick(event) {
    console.log('You have logged in');
  }
 
   render() {
        let percent = ((this.state.counter + 1) / this.state.nameholder.length) * 100;
    percent = percent.toString() + '%';
    if (this.state.step == "LOGINSIGNUP") {
      return (
        <Card style={styles.loginsignupcard}>
          <View>
            <Button
              text="Login"
              style={styles.loginsignupbutton}
              onPress={this.handleLoginClick}
              title="Login"
              name="Login"
            >
              <Text style={styles.textViewtwo}>Login</Text>
            </Button>
          </View>
          <View>
            <Button
              text="Signup"
              style={styles.loginsignupbutton}
              onPress={this.handleSignupClick}
              title="Signup"
              name="Signup"
            >
              <Text style={styles.textViewtwo}>Signup</Text>
            </Button>
          </View>
        </Card>
      );
    }
    if (this.state.step == "SIGNUP") {
      return (
        <Animated.View style={{ transform: [{ translateX: this.state.offsetX }] }}>
          <Card>
            <View style={{ flexDirection: 'row' }}>
              <Button text="Back" style={styles.buttonView} onPress={this.handleBackClick} title="Back" name="Back">
                <Text style={styles.textViewtwo}>Back</Text>
              </Button>
              <Text style={styles.textView}> {this.state.nameholder[this.state.counter]}</Text>

              <Button text="Submit" style={styles.buttonView} onPress={this.handleClick} title="Submit" name="Submit">
                <Text style={styles.textViewtwo}>Submit</Text>
              </Button>
            </View>

            <View
              style={{
                width: percent,
                backgroundColor: '#3cc11f',
                height: '2%',
                marginTop: '1%',
                marginBottom: '1%'
              }}
            />

            <Text style={{ fontSize: 30 }}>Please Input {this.state.nameholder[this.state.counter]}</Text>

            <View style={{ backgroundColor: '#ffffff' }}>
              <Form>
                <Item regular>
                  <Input
                    style={styles.textInputView}
                    onChangeText={statistic => this.setState({ statistic })}
                    value={this.state.statistic}
                    placeholder="Type here"
                  />
                </Item>
              </Form>
            </View>
            <View style={{ width: '100%',justifyContent: 'center',flexDirection: 'column',alignItems: 'center',  }}>
              <Button text="Skip" style={styles.skipbuttonView} onPress={this.handleSkipClick} title="Skip" name="Skip">
                <Text style={styles.textViewtwo}>Skip</Text>
              </Button>
            </View>
          </Card>
        </Animated.View>
      );
    }

    if (this.state.step =="ONBOARDING_FINISHED" ) {
      return (
        <Card style={styles.loginsignupcard}>
          <Text>Reached the App</Text>
        </Card>
      );
    }

    if (this.state.step == "LOGIN") {
      return (
        <Card style={styles.loginsignupcard}>
          <Form style={{ width: '100%' }}>
            <Item regular>
              <Input
                style={styles.textInputView}
                onChangeText={statistic => this.setState({ statistic })}
                value={this.state.statistic}
                placeholder="Type here"
              />
            </Item>
          </Form>
          <View>
            <Button
              text="Signup"
              style={styles.loginsignupbutton}
              onPress={this.handleLoginSubmitClick}
              title="Signup"
              name="Signup"
            >
              <Text style={styles.textViewtwo}>Login</Text>
            </Button>
          </View>
        </Card>
      );
    }
  }
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f98b7a'
  },
 
  textView: {
    width: '50%',
    paddingTop: 10,
    height: 50,
    backgroundColor: '#FA5845',
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF'
  },
 
  inputView: {
    width: '100%',
    height: '10%',
    backgroundColor: '#FA5845',
    color: '#000000',
    alignItems: 'center'
  },
 
  textInputView: {
    margin: 10,
    height: 40,
    fontSize: 30,
    color: '#000000'
  },
 

  buttonView: {
    width: '25%',
    height: 50,
    textAlign: 'center',
    backgroundColor: '#FA5845',
    alignItems: 'center',
    color: '#FFFFFF'
  },
  
  skipbuttonView:{
    marginLeft:'41%',
    marginRight:'41%',
    width: '18%',
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FA5845',
    color: '#FFFFFF'

},

  textViewtwo: {
    fontSize: 15,
    color: '#FFFFFF'
  },
 
  loginsignupcard: {
    flexDirection: 'column',
    justifyContent: 'center',
     alignItems: 'center',
    height: 400,
    width: 200
   },

  loginsignupbutton: {
    textAlign: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    backgroundColor: '#FA5845',
    color: '#FFFFFF',
    marginTop: 50
  }
});
