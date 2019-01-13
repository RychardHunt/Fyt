import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {Card} from 'native-base';
import {STRING, NUMBER} from '../../config/settings';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const styles = StyleSheet.create({
  textView: {
    width: '50%',
    paddingTop: 10,
    height: 50,
    backgroundColor: '#FA5845',
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF'
  }
});

class InputForm extends React.Component {

  getFormData = () => {
    const formField = t.struct({
      [this.props.formFieldName]: t.Number
    });
    if (this.props.formType == STRING) {
      const formField = t.struct({
        [this.props.formFieldName]: t.String
      });
    }

    return formField;
  }

  render() {
    return (<Animated.View>
      <Card>

        <View style={{
            flexDirection: 'row'
          }}>
          <Button text="Back" style={styles.buttonView} onPress={() => {
              this.propshandleBackClick()
            }} title="Back" name="Back"/>

          <Text style={styles.textView}>
            {this.props.formFieldName}</Text>

          <Button text="Submit" style={styles.buttonView} onPress={() => {
              this.props.submitOnboardingForm(this.formRef.getValue());
            }} title="Submit" name="Submit"/>
        </View>

        <View>
          <Text style={{
              fontSize: 30
            }}>Please Input {this.props.formFieldName}</Text>
          <Form ref={ref => this.formRef = ref} type={this.getFormData()}/>
        </View>

        <View style={{
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Button text="Skip" style={styles.skipbuttonView} onPress={() => {
              this.props.handleSkipClick()
            }} title="Skip" name="Skip"/>
        </View>
      </Card>
    </Animated.View>);
  }
}
export default InputForm;
