import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  exerciseHeader : {
    fontSize: 18
  },
  exercisePanel: {
    marginLeft: 10,
    marginBottom: 5
  }

});



class ExerciseHistoryPanel extends React.Component{

  createSetPanels(){
    const setPanels = []
    for(const set in this.props.exercise){
      const setPanel = (<View><Text style={styles.setInfo}>{this.props.exercise[set].reps} reps, {this.props.exercise[set].weight} lbs. </Text></View>)
      setPanels.push(setPanel);
    }
    return setPanels;
  }

  render(){
    return(<View style={styles.exercisePanel}>
      <Text style={styles.exerciseHeader}>
        {this.props.exerciseName}
       </Text>
       {this.createSetPanels()}
      </View>);
  }
}
export default ExerciseHistoryPanel;
