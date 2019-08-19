import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import Colors from '../constants/Colors';
// import {UsbSerial} from 'react-native-usbserial';
// const usbs = new UsbSerial();

export default class UsbScreen extends Component {
  _onPressButton = () => {
    // this.props.navigation.navigate('Read');
    this.props.navigation.navigate('Details');
    // this.props.navigation.navigate('Scan');
    // this.props.navigation.navigate('NotFind')
  };

  // async getDeviceAsync() {
  //   try {
  //     const deviceList = await usbs.getDeviceListAsync();
  //     const firstDevice = deviceList[0];

  //     Alert.alert(firstDevice);

  //     if (firstDevice) {
  //       const usbSerialDevice = await usbs.openDeviceAsync(firstDevice);

  //       Alert.alert(usbSerialDevice);
  //     }
  //   } catch (err) {
  //     Alert.alert(err);
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} contentContainerStyle={{paddingTop: 30}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.lighter,
            }}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image
                source={require('../assets/images/usb.png')}
                style={{width: 200, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

UsbScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
