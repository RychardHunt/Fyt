import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from 'react-native-material-ui'

export default class NavBar extends React.Component{
  constructor(){
    super();
    this.state = {
      active:'diet'
    }
  }
  render() {
    return (
        <BottomNavigation active={this.state.active} hidden={false}
        style={navBarContainer} >
          <BottomNavigation.Action
            key="profile"
            icon="today"
            label="Profile"
            onPress={() => this.setState({ active:'profile' })}
            style={navBarActionLayout}
          />
          <BottomNavigation.Action
            key="diet"
            icon="bookmark-border"
            label="Diet"
            onPress={() => this.setState({ active: 'diet' })}
            style={navBarActionLayout}
          />
          <BottomNavigation.Action
            key="exercise"
            icon="settings"
            label="Exercise"
            style={navBarActionLayout}
            onPress={() => this.setState({ active: 'exercise' })}
            style={navBarActionLayout}
          />
        </BottomNavigation>
    )
  }
}

const navBarContainer = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection:'row',
    height:'7%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#D3D3D3',
    justifyContent:'space-evenly',
  }
});

const navBarActionLayout = StyleSheet.create({
  container: {
    backgroundColor:'purple'
  },
  active: {
    color:'purple'
  },
  disabled: {
    color:'purple'
  }
});
