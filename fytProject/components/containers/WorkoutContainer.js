import React from 'react';
import {bindActionCreators} from 'redux';
import {View} from 'react-native';
import { connect } from 'react-redux';
import WorkoutList from '../WorkoutList.js';
import {calculateWorkoutProgress} from '../../config/utilities.js';

import {editSet, changeSetCompletionStatus} from '../../actions/WorkoutActions';

class WorkoutContainer extends React.Component {

  render(){
    let workoutProgress = calculateWorkoutProgress(this.props.workout);
    return(
      <WorkoutList workoutProgress={workoutProgress} workout={this.props.workout}/>
  );
  }

}

function mapStateToProps(state){
  return { workout: state.workout
  };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({editSet: editSet,
                              changeSetCompletionStatus: changeSetCompletionStatus},
                              dispatch);

}
export default connect(mapStateToProps, matchDispatchToProps)(WorkoutContainer);
