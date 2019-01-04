import React, { Component } from "react";
import { Button, Body, Icon } from "native-base";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  play_button: {
    borderRadius: 50,
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    elevation: 0,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  check: {
    fontSize: 50
  },
  arrow_button: {
    backgroundColor: "transparent",
    elevation: 0,
    alignSelf: "center",
    justifyContent: "center",
    width: 100,
    height: 100
  },
  arrow: {
    fontSize: 60
  }
});

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.arrow_button} onPress={this.props.prev}>
          <Icon
            style={styles.arrow}
            type="MaterialIcons"
            name="keyboard-arrow-left"
          />
        </Button>
        <Button style={styles.play_button}>
          <Icon style={styles.check} type="Feather" name="check" />
        </Button>
        <Button style={styles.arrow_button} onPress={this.props.next}>
          <Icon
            style={styles.arrow}
            type="MaterialIcons"
            name="keyboard-arrow-right"
          />
        </Button>
      </View>
    );
  }
}
