import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import SideBar from './SideBar';
import TabNav from './TabNav';
import SettingsScreen from '../SampleScreens/SettingsScreen';

export default (DrawerNav = DrawerNavigator(
  {
    Tabs:     { screen: TabNav   },
    Settings: { screen: SettingsScreen }
  },
  {
    contentComponent: props => <SideBar {...props}/>
  }
));
