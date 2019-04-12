import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Icon, Text, Container } from "native-base";
import { connect } from "react-redux";
import { Constants } from "expo";
import Head from "../Navigation/Head";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../config/settings";
import { backgroundColor, headerColor } from "../../config/styles";

const boxDim = (DEVICE_WIDTH * 0.8) / 2;
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: backgroundColor,
    top: Constants.statusBarHeight
  },
  wrapperStyle: {
    width: DEVICE_WIDTH * 0.95,
    alignItems: "center",
    paddingBottom: 50
  },
  boxStyle: {
    backgroundColor: "lightgray",
    width: boxDim,
    height: boxDim,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 25
  },
  iconStyle: {
    fontSize: 35,
    position: "absolute",
    bottom: "2%"
  },
  titleView: {
    position: "absolute",
    top: "5%"
  },
  titleTextStyle: {
    fontSize: 21,
    padding: 5
  },
  contentView: {},
  contentTextStyle: {
    textAlign: "center",
    fontSize: 30,
    padding: 5
  }
});

class Profile extends Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <Container style={styles.containerStyle}>
        <Head title="Profile" navigation={navigate} />
        <View style={{ alignItems: "center", flex: 1 }}>
          <FlatList
            numColumns={2}
            data={[
              { name: "Height", icon: "man", key: 0 },
              { name: "Weight", icon: "body", key: 1 },
              { name: "Age", icon: "calendar", key: 2 },
              { name: "Streak", icon: "star", key: 3 },
              { name: "Goal", icon: "trophy", key: 4 }
            ]}
            style={styles.mainStyle}
            contentContainerStyle={styles.wrapperStyle}
            renderItem={({ item }) => (
              <View style={styles.boxStyle}>
                <View style={styles.titleView}>
                  <Text style={styles.titleTextStyle}>{item.name}</Text>
                </View>
                <View style={styles.contentView}>
                  <Text style={styles.contentTextStyle}>
                    {this.props.profileText[item.key]}
                  </Text>
                </View>
                <Icon name={item.icon} style={styles.iconStyle} />
              </View>
            )}
          />
        </View>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    profileText: [
      state.profile.height,
      state.profile.weight,
      state.profile.age,
      state.profile.streak,
      state.profile.goal
    ]
  };
}

export default connect(mapStateToProps)(Profile);
