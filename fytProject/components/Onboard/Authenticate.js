import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
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

export default class Authenticate extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log("updated");
    forceUpdate();
  }

  render() {
    console.log(this.props.signup);
    const child = !this.props.signup ? <Register /> : <Login />;
    return <Div>child</Div>;
  }
}
