import React from 'react';
import FormTrain from '../onboarding/FormTrain';
import LoginRegisterContainer from './LoginRegisterContainer';
class OnboardingContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showOnboardingSequence: false
    }
  }

  toggleOnboardingSequence = () => {
    this.setState({
      showOnboardingSequence: !this.state.showOnboardingSequence
    });
  }

  render(){
    console.log(typeof this.toggleOnboardingSequence);
    if(this.state.showOnboardingSequence){
      return(<FormTrain name={["Name", "Height"]}
                        type={["String", "String"]}
                        endOnboarding={this.props.stopOnboardingFunction}/>);
    }
    else{
    return(
      <LoginRegisterContainer startOnboardingFunction={this.toggleOnboardingSequence}/>
    );
  }
  }
}
export default OnboardingContainer;
