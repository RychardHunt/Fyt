import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { editSet, changeSetCompletionStatus} from '../../actions/WorkoutActions';
import Set from '../workoutList/Set';
import {COLOR_1, COLOR_2} from '../../config/settings';

class SetContainer extends React.Component {


  constructor(props){
    super(props);
    this.state={
      completionButtonColor: COLOR_2,
      modalVisible: false
    }
  }


  changeSetCompletionStatus = (exercise, setNumber) => {
    if(this.state.completionButtonColor==COLOR_1){
      this.setState({
        completionButtonColor: COLOR_2
      });
    }
    else{
      this.setState({
        completionButtonColor: COLOR_1
      });
    }
    this.props.changeSetCompletionStatus(exercise, setNumber);
  }


  handleFormSubmit = (formInput) => {
    this.props.editSet(this.props.exerciseName, this.props.setNumber, formInput.reps, formInput.weight);
  }


  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }
  render(){

    return(<Set setNumber={this.props.setNumber}
                setDetails={this.props.setDetails}
                exerciseName={this.props.exerciseName}
                modalVisible={this.state.modalVisible}
                changeSetCompletionStatus={this.changeSetCompletionStatus}
                editSetFunction={this.handleFormSubmit}
                toggleModalFunction={this.toggleModal}
                completionButtonColor={this.state.completionButtonColor}/>);
  }


}

function mapStateToProps(state){
  return { workout: state.workout };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({ changeSetCompletionStatus: changeSetCompletionStatus,
                                editSet: editSet},
                                dispatch);

}
export default connect(mapStateToProps, matchDispatchToProps)(SetContainer);
