import React, { Component } from "react";
import { Button, Body, Icon, Text, H3, Card, CardItem } from "native-base";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  row_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#212121",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10
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
    this.renderSet = this.renderSet.bind(this);
    this.resetCarousel = this.resetCarousel.bind(this);
  }

  renderSet({item, index}) {
    return (
      <View style={styles.row_container}>
        <View>
          <Icon
            style={styles.icon}
            type="MaterialCommunityIcons"
            name="format-list-numbers"
          />
          <H3 style={styles.label}>Set</H3>
          <H3 style={styles.label}>{index + 1}</H3>
        </View>
        <View>
          <Icon style={styles.icon} type="MaterialIcons" name="repeat" />
          <H3 style={styles.label}>Reps</H3>
          <H3 style={styles.label}>{item.reps}</H3>
        </View>
        <View>
          <Icon
            style={styles.icon}
            type="MaterialCommunityIcons"
            name="dumbbell"
          />
          <H3 style={styles.label}>Weight</H3>
          <H3 style={styles.label}>{item.weight}</H3>
        </View>
      </View>
    );
  }

  resetCarousel() {
    this.carousel.snapToItem(0, false);
  }

  render() {
    return (
      <View>
        <Carousel ref={(c) => this.carousel = c } data={this.props.sets} renderItem={this.renderSet} sliderWidth={Dimensions.get('window').width} itemWidth={Dimensions.get('window').width - 100} layout={'default'} onSnapToItem={this.props.updateSetIndex}/>
      </View>
    );
  }
}
