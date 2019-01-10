import React, { Component } from "react";
import { Button, Body, Icon, Text, H3 } from "native-base";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row_container: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  label: {
    color: "#fff",
    alignSelf: "center",
    paddingTop: 5
  },
  icon: {
    color: "#fff",
    fontSize: 60
  }
});

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.row_container}>
        <View>
          <Icon
            style={styles.icon}
            type="MaterialCommunityIcons"
            name="format-list-numbers"
          />
          <H3 style={styles.label}>Set</H3>
          <H3 style={styles.label}>{this.props.set}</H3>
        </View>
        <View>
          <Icon style={styles.icon} type="MaterialIcons" name="repeat" />
          <H3 style={styles.label}>Reps</H3>
          <H3 style={styles.label}>{this.props.reps}</H3>
        </View>
        <View>
          <Icon
            style={styles.icon}
            type="MaterialCommunityIcons"
            name="dumbbell"
          />
          <H3 style={styles.label}>Weight</H3>
          <H3 style={styles.label}>{this.props.weight}</H3>
        </View>
      </View>
    );
  }
}
