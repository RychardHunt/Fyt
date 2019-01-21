import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Container, Card, Content} from 'native-base';
import SetContainer from '../containers/SetContainer';
import EditSetMenu from './EditSetMenu';

const styles = StyleSheet.create({

  exerciseHeaderText :{
     fontSize: 40,
  },
  exerciseHeader : {
    alignItems : 'center',
    justifyContent: 'center'
  },
  exercisePanel: {
    marginBottom: 20
  }

});

class ExercisePanel extends React.Component {


  createSetPanels(){
    setPanels = [];
    for(set in this.props.exerciseDetails){
      const setPanel = (<SetContainer key= {set}
                             setNumber={set}
                             exerciseName={this.props.exerciseName}
                             setDetails={this.props.exerciseDetails[set]}/>);
      setPanels.push(setPanel);

    }
    return setPanels;

  }


render(){
  return(<View style={styles.exercisePanel}>
        <EditSetMenu
          modalVisible= {this.props.setMenuVisible}
          exerciseName={this.props.exerciseName}
          weight={0}
          reps={0}
          editSetFunction={this.props.addSetFunction}
          toggleModalFunction={this.props.toggleSetMenuVisibilityFunction}/>
        <TouchableOpacity onPress={()=>{this.props.toggleSetMenuVisibilityFunction()}}>
            <Card style={styles.exerciseHeader}>
                <Text style={styles.exerciseHeaderText}>{this.props.exerciseName}</Text>
            </Card>
          </TouchableOpacity>
            {this.createSetPanels()}
          </View>);
}

}
export default ExercisePanel;
