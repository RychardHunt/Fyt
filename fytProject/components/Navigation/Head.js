import React from "react";
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import {
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Text,
  View,
  StyleProvider
} from "native-base";
import Logout from "../Onboard/Logout";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import { colorTheme, headerColor } from "../../config/styles";
import { Constants } from "expo";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../config/settings";
import platform from "../../native-base-theme/variables/platform";
import getTheme from "../../native-base-theme/components";

const h = DEVICE_HEIGHT * 0.6;
const w = DEVICE_WIDTH * 0.8;

export default class Head extends React.Component {
  state = {
    modalVisible: false
  };
  setModalInvisible() {
    this.setState({ modalVisible: false });
  }
  setModalVisible() {
    this.setState({ modalVisible: true });
  }
  render() {
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalInvisible();
          }}
          transparent={true}
        >
          <StyleProvider style={getTheme(platform)}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000080"
              }}
              onPress={() => {
                this.setModalInvisible();
              }}
            >
              <TouchableWithoutFeedback>
                <View
                  style={{
                    height: h,
                    width: w,
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "lightgray",
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: "darkgray"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      textAlign: "center",
                      color: "black",
                      top: "20%"
                    }}
                  >
                    {`Do you want
to log out?`}
                  </Text>
                  <View
                    style={{ alignItems: "center", top: "30%", width: "30%" }}
                  >
                    <Button
                      style={{ width: "100%", justifyContent: "center" }}
                      rounded
                      onPress={() => {
                        this.setModalInvisible();
                        this.props.navigation.navigate("Logout");
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>Yes</Text>
                    </Button>
                    <View style={{ height: 10 }} />
                    <Button
                      style={{ width: "100%", justifyContent: "center" }}
                      rounded
                      onPress={() => {
                        this.setModalInvisible();
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>No</Text>
                    </Button>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </StyleProvider>
        </Modal>
        <Header style={colorTheme.header}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.setModalVisible();
              }}
            >
              <MaterialCommunityIcons
                style={{ fontSize: 28, color: "white" }}
                name="logout"
              />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}
