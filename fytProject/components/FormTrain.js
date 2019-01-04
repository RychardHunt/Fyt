import * as React from 'react';
import { FileSystem } from 'expo';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { Button, Card, Text, View, Form, Item, Input } from 'native-base';
var onboarding = false;
var startstep=0;
if (onboarding==false){
startstep=2;}

var jsonpath = FileSystem.documentDirectory+'users.json';
var jsonpathobject = FileSystem.getInfoAsync(jsonpath, { md5: false });
if (jsonpathobject.exists == false) {
  console.log('file exists=false');
  FileSystem.makeDirectoryAsync(path, { intermediates: true });
} else {
  console.log('file exists=true');
}
 
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
      step: startstep //0:login/signup 1:registration 2:onboarding 3:login
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
    const prevdata = await FileSystem.readAsStringAsync(jsonpath);
    console.log('Previous data = ' + prevdata);
    var finalstring = prevdata +',' + jsonobjectstring;
    console.log('Final String = ' + finalstring);
    FileSystem.writeAsStringAsync(jsonpath, finalstring);
    console.log('Final String = ' + finalstring);
    if (onboarding == true) {
      this.setState({
        step: 2
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
    this.setState({ step: 3 });
  }
 
  handleSignupClick(event) {
    console.log('Go to registration screen');
    this.setState({ step: 1 });
  }
 
  handleRegistrationBackClick(event) {
    console.log('Go to login/signup screen');
    this.setState({ step: 0 });
  }
 
  handleLoginSubmitClick(event) {
    console.log('You have logged in');
  }
 
   render() {
        let percent = ((this.state.counter + 1) / this.state.nameholder.length) * 100;
    percent = percent.toString() + '%';
    if (this.state.step == 0) {
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
    if (this.state.step == 1) {
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
            <View style={{ alignItems: 'center', width: '100%' }}>
              <Button text="Skip" style={styles.buttonView} onPress={this.handleSkipClick} title="Skip" name="Skip">
                <Text style={styles.textViewtwo}>Skip</Text>
              </Button>
            </View>
          </Card>
        </Animated.View>
      );
    }

    if (this.state.step == 2) {
      return (
        <Card style={styles.loginsignupcard}>
          <Text>Reached the App</Text>
        </Card>
      );
    }

    if (this.state.step == 3) {
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
    backgroundColor: '#e5e5e5',
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