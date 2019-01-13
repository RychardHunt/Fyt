import React from 'react'
import {View , StyleSheet} from 'react-native';
import {LOGIN, REGISTRATION} from '../../config/settings';
import Registration from '../onboarding/Register';
import Login from '../onboarding/Login';

styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class LoginRegisterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: LOGIN
    }
  }
  toggleLoginRegistration = () => {
    if(this.state.mode==LOGIN){
      this.setState({
        mode: REGISTRATION
      });
    }
      else{
        this.setState({
          mode: LOGIN
        });
      }
    }



  renderComponents(){
    if(this.state.mode==LOGIN){
      return(<Login showRegistration={this.toggleLoginRegistration}/>)
    }
    else{
      return(<Registration startOnboardingFunction={this.props.startOnboardingFunction}
                           showLogin = {this.toggleLoginRegistration}/>)
    }
  }

  render(){
    return(<View style={styles.container}>
          {this.renderComponents()}
        </View>

    );
  }
}
export default LoginRegisterContainer;
