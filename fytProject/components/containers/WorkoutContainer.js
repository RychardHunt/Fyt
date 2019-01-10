import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import WorkoutList from '../WorkoutList.js';
import {editSet, changeSetCompletionStatus} from '../../actions/WorkoutActions';

class WorkoutContainer extends React.Component {

  render(){
    return(<WorkoutList workout={this.props.workout}/>);
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
