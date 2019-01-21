import React from 'react';
import {Modal, View, Button} from 'react-native';
import t from 'tcomb-form-native';
import {Fab, Icon} from 'native-base';

const Form = t.form.Form;

const exerciseInformation = t.struct({
  exerciseName: t.String
});
class AddExerciseMenu extends React.Component{


  render(){

    return(
    <View>
      <Fab
         active={true}
         direction="up"
         containerStyle={{}}
         style={{ backgroundColor: '#5067FF' }}
         position="bottomRight"
         onPress={() => {this.props.toggleExerciseMenuFunction()}}
         >
         <Icon name="add-circle" />
       </Fab>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.menuVisible}
        onRequestClose={() => {
              this.props.toggleExerciseMenuFunction();
              return true;
          }}>
        <Form ref={ref => this.formRef = ref} type={exerciseInformation}/>
        <Button
          title={"Add Exercise"}
          onPress={()=>{
            this.props.handleFormSubmit(this.formRef.getValue());
            this.props.toggleExerciseMenuFunction();
            return true;
          }}/>
      </Modal>


    </View>
  );
  }
}
export default AddExerciseMenu;
