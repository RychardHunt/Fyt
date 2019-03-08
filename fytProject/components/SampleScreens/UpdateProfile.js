import React from "react";
import {
  Container,
  Content,
  Text,
  View,
  Button,
  StyleProvider
} from "native-base";
import { StatusBar, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Head from "../Navigation/Head";
import { Constants } from "expo";
import { backgroundColor } from "../../config/styles";
import platform from "../../native-base-theme/variables/platform";
import getTheme from "../../native-base-theme/components";
import {
  changeHeight,
  changeWeight,
  changeAge,
  changeStreak
} from "../../actions/ProfileActions";

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "column",
    flex: 1
  },
  line: {
    flexDirection: "row",
    marginBottom: 3
  },
  inputStyle: {
    fontSize: 20,
    fontStyle: "italic",
    color: "lightgray"
  },
  outputStyle: {
    color: "white",
    fontSize: 20
  },
  boxStyle: {
    flex: 1,
    width: "90%",
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center"
  },
  leftView: {
    width: "40%"
  },
  rightView1: {
    width: "20%",
    alignItems: "flex-end"
  },
  rightView2: {
    width: "40%",
    alignItems: "center"
  },
  bg_dark: {
    backgroundColor: backgroundColor,
    top: Constants.statusBarHeight
  }
});

class UpdateProfile extends React.Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container style={styles.bg_dark}>
          <Head title="Update Profile" navigation={navigate} />
          <View style={{ height: 3 }} />
          <View style={styles.mainView}>
            <View style={styles.line}>
              <View style={styles.leftView}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Modify Height..."
                  placeholderTextColor="grey"
                  onChangeText={text => this.props.changeHeight(text)}
                  testID="01"
                />
              </View>
              <View style={styles.rightView1}>
                <Text style={styles.outputStyle}>Height:</Text>
              </View>
              <View style={styles.rightView2}>
                <View style={styles.boxStyle}>
                  <Text testID="02" style={styles.outputStyle}>
                    {this.props.height}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.leftView}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Modify Weight..."
                  placeholderTextColor="grey"
                  onChangeText={text => this.props.changeWeight(text)}
                  testID="01"
                />
              </View>
              <View style={styles.rightView1}>
                <Text style={styles.outputStyle}>Weight:</Text>
              </View>
              <View style={styles.rightView2}>
                <View style={styles.boxStyle}>
                  <Text testID="02" style={styles.outputStyle}>
                    {this.props.weight}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.leftView}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Modify Age..."
                  placeholderTextColor="grey"
                  onChangeText={text => this.props.changeAge(text)}
                  testID="01"
                />
              </View>
              <View style={styles.rightView1}>
                <Text style={styles.outputStyle}>Age:</Text>
              </View>
              <View style={styles.rightView2}>
                <View style={styles.boxStyle}>
                  <Text testID="02" style={styles.outputStyle}>
                    {this.props.age}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.leftView}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Modify Streak..."
                  placeholderTextColor="grey"
                  onChangeText={text => this.props.changeStreak(text)}
                  testID="01"
                />
              </View>
              <View style={styles.rightView1}>
                <Text style={styles.outputStyle}>Streak:</Text>
              </View>
              <View style={styles.rightView2}>
                <View style={styles.boxStyle}>
                  <Text testID="02" style={styles.outputStyle}>
                    {this.props.streak}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <Button onPress={() => this.props.navigation.navigate("Tab1")}>
                <Text>Return to profile...</Text>
              </Button>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    height: state.profile.height,
    weight: state.profile.weight,
    age: state.profile.age,
    streak: state.profile.streak
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeHeight: arg => dispatch(changeHeight(arg)),
    changeWeight: arg => dispatch(changeWeight(arg)),
    changeAge: arg => dispatch(changeAge(arg)),
    changeStreak: arg => dispatch(changeStreak(arg))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
