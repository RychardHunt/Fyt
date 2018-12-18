// Bottom-of-screen Menu Bar Component
// Sprint 0
// Alex Stewart

import React from 'react';
import {Button} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const selectedColor = '#4b4c4c'
const unselectedColor = 'grey'

export default class BottomBar extends React.Component{
  constructor(){
    super();
    this.state = {
      b1Color: selectedColor,
      b2Color: unselectedColor,
      b3Color: unselectedColor
    }
  }
  render(){
    let selection = this.state.selection
    let pressB1 = () => {
      this.setState({
        b1Color: selectedColor,
        b2Color: unselectedColor,
        b3Color: unselectedColor
      })
    }
    let pressB2 = () => {
      this.setState({
        b1Color: unselectedColor,
        b2Color: selectedColor,
        b3Color: unselectedColor
      })
    }
    let pressB3 = () => {
      this.setState({
        b1Color: unselectedColor,
        b2Color: unselectedColor,
        b3Color: selectedColor
      })
    }
    return(
      <View style={layout.container}>
        <View style={layout.buttonView}>
          <View style={layout.subView}>
            <Button
              title = 'Profile'
              color = {this.state.b1Color}
              onPress = {pressB1}
            />
          </View>
        </View>
        <View style={layout.buttonView}>
          <View style={layout.subView}>
            <Button
              title = 'Diet'
              color = {this.state.b2Color}
              onPress = {pressB2}
            />
          </View>
        </View>
        <View style={layout.buttonView}>
          <View style={layout.subView}>
            <Button
              title = 'Workout'
              color = {this.state.b3Color}
              onPress = {pressB3}
            />
          </View>
        </View>
      </View>
    );
  }
} // End of BottomBar Class

const layout = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection:'row',
    height:45,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#D3D3D3'
  },
  buttonView: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  subView: {
    flex: 1,
    flexDirection: 'column',
  }
});
