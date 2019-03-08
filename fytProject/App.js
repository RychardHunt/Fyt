import React from "react";
import DrawerNav from "./components/Navigation/DrawerNav";
import { Provider } from "react-redux";
import store from "./store";

console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <DrawerNav />
        </Provider>
      );
    }
  }
}
