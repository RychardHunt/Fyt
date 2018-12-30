import React from 'react';
import { connect } from 'react-redux';
import {View} from 'react-native';

class WorkoutHistoryContainer extends React.Component{

  render(){
    return(
    <View>
    </View>
  );
  }
}

function mapStateToProps(state){
  return { workout: state.workout
  };
}

export default connect(mapStateToProps, null)(WorkoutHistoryContainer);
