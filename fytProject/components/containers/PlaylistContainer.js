import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { H1, Text } from "native-base";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Right,
  Icon,
  Title,
  Content
} from "native-base";
import Controls from "../Playlist/Controls";
import Dashboard from "../Playlist/Dashboard";

const styles = StyleSheet.create({
  bg_dark: {
    backgroundColor: "#303030"
  },
  header: {
    backgroundColor: "#B71C1C"
  },
  playlist: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  workout: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    padding: 10
  }
});

function mapStateToProps(state) {
  return { workout: state.workout };
}

class Playlist extends Component {
  constructor(props) {
    super(props);
    let queue = [];
    for (let workout in this.props.workout) {
      let workoutObj = { workout: workout };
      let sets = [];
      for (let set in this.props.workout[workout]) {
        let setInfo = this.props.workout[workout][set];
        let setObj = { reps: setInfo.reps, weight: setInfo.weight };
        sets.push(setObj);
      }
      workoutObj.sets = sets;
      queue.push(workoutObj);
    }
    this.state = {
      queue: queue,
      workoutIdx: 0,
      setIdx: 0
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //TODO: Handle change in redux state?
  }

  prev() {
    let newSetIdx = this.state.setIdx - 1;
    if (newSetIdx < 0) {
      let newWorkoutIdx = this.state.workoutIdx - 1;
      if (newWorkoutIdx < 0) {
        //Currently at the beginning of the queue
        return;
      }
      newSetIdx = this.state.queue[newWorkoutIdx].sets.length - 1;
      this.setState({ workoutIdx: newWorkoutIdx, setIdx: newSetIdx });
      return;
    }
    this.setState({ setIdx: newSetIdx });
  }

  next() {
    let newSetIdx = this.state.setIdx + 1;
    if (newSetIdx >= this.state.queue[this.state.workoutIdx].sets.length) {
      let newWorkoutIdx = this.state.workoutIdx + 1;
      if (newWorkoutIdx >= this.state.queue.length) {
        //Currently at the end of the queue
        return;
      }
      newSetIdx = 0;
      this.setState({ workoutIdx: newWorkoutIdx, setIdx: newSetIdx });
      return;
    }
    this.setState({ setIdx: newSetIdx });
  }

  render() {
    return (
      <Container style={styles.bg_dark}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Fyt</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.playlist}>
          <H1 style={styles.workout}>
            {this.state.queue[this.state.workoutIdx].workout}
          </H1>
          <Dashboard
            set={this.state.setIdx + 1}
            reps={
              this.state.queue[this.state.workoutIdx].sets[this.state.setIdx]
                .reps
            }
            weight={
              this.state.queue[this.state.workoutIdx].sets[this.state.setIdx]
                .weight
            }
          />
          <Controls prev={this.prev} next={this.next} />
        </View>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Playlist);
