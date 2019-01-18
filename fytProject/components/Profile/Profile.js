import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Icon, Text, Container } from 'native-base';
import { Constants } from 'expo';
import Head from '../Navigation/Head';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../config/settings';
import { backgroundColor, headerColor } from '../../config/styles';

const boxDim = ((DEVICE_WIDTH * .80)/2);
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: backgroundColor,
    top: Constants.statusBarHeight,
  },
  wrapperStyle: {
    width: DEVICE_WIDTH * .95,
    alignItems: 'center',
    paddingBottom:50,
  },
  boxStyle: {
    backgroundColor: 'lightgray',
    width: boxDim,
    height: boxDim,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    margin: 15,
    borderRadius:25,
  },
  iconStyle:{
    fontSize: 40,
    position: 'absolute',
    bottom: '2%',
  },
  textStyle:{
    position: 'absolute',
    top: '10%',
    fontSize: 20,
    padding: 5
  },
});

export default class Profile extends Component {
  render(){
    const navigate = this.props.navigation;
    return(
      <Container style={styles.containerStyle}>
        <Head title='Profile' navigation = { navigate }/>
        <View style={{alignItems:'center',flex:1}}>
          <FlatList
            numColumns = {2}
            data = { ['123','456','asdf','asdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdf','1','2','3','4','5','10'] }
            style={styles.mainStyle}
            contentContainerStyle={styles.wrapperStyle}
            renderItem = {({item}) => (
              <View style={styles.boxStyle}>
                <Text style={styles.textStyle}>{item}</Text>
                <View style={{height:5}}/>
                <Icon name='home' style={styles.iconStyle}/>
              </View>
            )}
          />
        </View>
      </Container>
    );
  }
}
