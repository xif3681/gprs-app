import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import NotFindScreen from '../screens/NotFindScreen';
import ReadScreen from '../screens/ReadScreen';
import ScanScreen from '../screens/ScanScreen';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Scan: {screen: ScanScreen},
    NotFind: {screen: NotFindScreen},
  },
  config,
);

const DetailsStack = createStackNavigator(
  {
    Details: {screen: DetailsScreen},
    Scan: {screen: ScanScreen},
    NotFind: {screen: NotFindScreen},
  },
  config,
);
const ReadStack = createStackNavigator(
  {
    Read: {screen: ReadScreen},
    NotFind: {screen: NotFindScreen},
  },
  config,
);

const AppNavigator = createStackNavigator(
  {
    HomeStack,
    DetailsStack,
    ReadStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
