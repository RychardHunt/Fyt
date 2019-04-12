import React, { Component } from "react";
import { AsyncStorage, Alert } from "react-native";
import { connect } from "react-redux";
import DrawerNav from "./DrawerNav";
import RegisterNav from "./RegisterNav";
import { checkLogin } from "../../actions/OnboardActions";

class Landing extends Component {
  render() {
    if (this.props.authenticated) {
      return <DrawerNav />;
    } else {
      return <RegisterNav />;
    }
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.onboard.authenticated
  };
}

export default connect(mapStateToProps)(Landing);
