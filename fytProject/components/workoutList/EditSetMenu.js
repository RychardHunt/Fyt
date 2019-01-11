
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import t from 'tcomb-form-native';


const Form = t.form.Form;


// * reps: The number of reps the user wants for this set (to be inputted by user)
// *  weight: The amount of weight the user wants to do for this set (to be inputted by user)



class EditSetMenu extends React.Component {
    getFormTitle = () => {
      if(this.props.editSet){
        return "Edit Set";
      }
      else{
        return "Add a new set";
      }
    }
    getFormInformation = () => {
    const editInformation = t.struct({
      reps: t.maybe(t.Number),
      weight: t.maybe(t.Number)
    });

    const addInformation = t.struct({
      reps: t.Number,
      weight: t.Number
    })
    //editing a set
    if(this.props.editSet){
      return editInformation;
    }
    //adding a set
    else{
      return addInformation;
    }

  }

  render() {
    return (
      <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
            this.props.toggleModalFunction();
            return true;
        }}>
        <Text style={styles.formTitle}>{this.getFormTitle()}</Text>
        <Form ref={ref => this.formRef = ref} type={this.getFormInformation()} value={{reps: this.props.reps, weight: this.props.weight}}/>
        <Button
          title="Enter"
          onPress={()=>{
            this.props.editSetFunction(this.formRef.getValue(), this.props.exerciseName);
            this.props.toggleModalFunction();
            return true;
          }}/>
    </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 30
  }

});


export default EditSetMenu;
