import * as React from 'react';
import {ONBOARDING_MODE} from '../../config/settings';
import { FileSystem } from 'expo';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { Button, Card, Text, View, Form, Item, Input } from 'native-base';
import InputForm from './InputForm';


var startstep="SIGNUP";
if (!ONBOARDING_MODE){
startstep="ONBOARDING_FINISHED";}


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
      step: startstep //LOGINSIGNUP:login/signup SIGNUP:registration ONBOARDING_FINISHED:onboarding LOGIN:login
    };
  }


  finishOnboarding = (namearray, typearray, inputarray) => {
    var jsonobject = {};
    for (var i = 0; i < inputarray.length; i++) {
      jsonobject[namearray[i]] = inputarray[i];
    }
    var jsonobjectstring = JSON.stringify(jsonobject);
    this.props.endOnboarding();
  }
  handleClick = (event) => {
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
      this.finishOnboarding(this.state.nameholder, this.state.typeholder, this.state.inputholder);
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
  handleSkipClick= (event) => {
    this.finishOnboarding(this.state.nameholder, this.state.typeholder, this.state.inputholder);
  }



   render() {
    let percent = ((this.state.counter + 1) / this.state.nameholder.length) * 100;
    percent = percent.toString() + '%';
    if (this.state.step == "SIGNUP") {
      return (
        <InputForm formFieldName={this.state.nameholder[this.state.counter]}
                   formType={this.state.typeholder[this.state.counter]}
                   handleBackClick={this.handleBackClick}
                   handleSkipClick={this.handleSkipClick}
                   submitOnboardingForm={this.handleClick}/>
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
