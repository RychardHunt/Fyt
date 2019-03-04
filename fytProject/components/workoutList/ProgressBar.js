import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";

const styles = StyleSheet.create({
  progressBar: {
    height: 30
  }
});

class ProgressBar extends React.Component {
  render() {
    const barWidth = Dimensions.get("screen").width - 30;
    return (
      <View style={styles.progressBar}>
        <ProgressBarAnimated
          width={barWidth}
          maxValue={100}
          value={this.props.workoutProgress}
        />
      </View>
    );
  }
}
export default ProgressBar;
