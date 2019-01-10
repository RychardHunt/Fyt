import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import TabNav from './TabNav';
import Diet from '../SampleScreens/Diet';
import Exercise from '../SampleScreens/Exercise';
import SideBar from './SideBar';

export default (DrawerNav = DrawerNavigator(
  {
    Tabs:     { screen: TabNav  },
    Diet:     { screen: Diet    },
    Exercise: { screen: Exercise}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
));
