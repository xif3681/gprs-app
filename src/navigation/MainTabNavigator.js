import React from 'react';
import {Platform, Image} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import NotFindScreen from '../screens/NotFindScreen';
import ReadScreen from '../screens/ReadScreen';
import ScanScreen from '../screens/ScanScreen';
import UsbScreen from '../screens/UsbScreen';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});
// home
const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Scan: {screen: ScanScreen},
    NotFind: {screen: NotFindScreen},
  },
  config,
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => {
    return (
      <Image
        source={
          focused
            ? require('../assets/images/home_light_36.png')
            : require('../assets/images/home_36.png')
        }
        style={{height: 20, width: 20}}
      />
    );
  },
};
// details
const DetailsStack = createStackNavigator(
  {
    Details: {screen: DetailsScreen},
    Scan: {screen: ScanScreen},
    NotFind: {screen: NotFindScreen},
  },
  config,
);
// read
const ReadStack = createStackNavigator(
  {
    Read: {screen: ReadScreen},
    NotFind: {screen: NotFindScreen},
  },
  config,
);
ReadStack.navigationOptions = {
  tabBarLabel: 'Read',
  tabBarIcon: ({focused}) => {
    return (
      <Image
        source={
          focused
            ? require('../assets/images/file_light_36.png')
            : require('../assets/images/file_36.png')
        }
        style={{height: 20, width: 20}}
      />
    );
  },
};
// usb
const UsbStack = createStackNavigator(
  {
    Read: {screen: UsbScreen},
    NotFind: {screen: NotFindScreen},
  },
  config,
);
UsbStack.navigationOptions = {
  tabBarLabel: 'Usb',
  tabBarIcon: ({focused}) => {
    return (
      <Image
        source={
          focused
            ? require('../assets/images/usb_light_36.png')
            : require('../assets/images/usb_36.png')
        }
        style={{height: 20, width: 20}}
      />
    );
  },
};

const AppNavigator = createStackNavigator(
  {
    HomeStack,
    DetailsStack,
    ReadStack,
    UsbStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Read: ReadStack,
  Usb: UsbStack,
});

export default createAppContainer(TabNavigator);
// export default createAppContainer(AppNavigator);
