import React, { Component } from "react";
import DrawerNav from "../Navigation/DrawerNav";
import Authenticate from "./Authenticate";
import store from "../../store";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  View
} from "native-base";
import { Constants } from "expo";
import Head from "../Navigation/Head";

function handleChange() {
  console.log("signup changed " + store.getState().signupscreen);
  return store.getState().signupscreen;
}

export default class Onboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log("updated");
    forceUpdate();
  }

  render() {
    console.log(this.props.authenticated);
    return !this.props.authenticated ? (
      <DrawerNav />
    ) : (
      <Authenticate signup={store.subscribe(handleChange)} />
    );
  }
}
