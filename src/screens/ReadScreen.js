// import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
// require the module
var RNFS = require('react-native-fs');
// import * as RNFS from 'react-native-fs';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gprs: require('../assets/data/gprs.json'),
    };
  }
  _onPressButton = () => {
    // this.props.navigation.navigate('Settings')
    // this.props.navigation.navigate('Links')
    // this.props.navigation.navigate('Details')
    // this.props.navigation.navigate('Scan')
    // this.props.navigation.navigate('Camera')
    // this.props.navigation.navigate('NotFind')

    // get a list of files and directories in the main bundle
    //Alert.alert(RNFS.MainBundlePath)
    // Alert.alert(RNFS.CachesDirectoryPath);
    // Alert.alert(RNFS.DocumentDirectoryPath);
    //Alert.alert(RNFS.TemporaryDirectoryPath)
    //Alert.alert( RNFS.LibraryDirectoryPath)
    Alert.alert(RNFS.ExternalDirectoryPath);
    // Alert.alert(RNFS.ExternalStorageDirectoryPath);

    // let rnfsPath =
    //   Platform.OS === 'ios'
    //     ? RNFS.LibraryDirectoryPath
    //     : RNFS.ExternalDirectoryPath;
    // const path = rnfsPath + '/test_' + new Date().getTime() + '.txt';
    // RNFS.writeFile(path, this.state.gprs.student, 'utf8')
    //   .then(success => {
    //     Alert.alert(path);
    //     Alert.alert(success);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // RNFS.readDir(RNFS.ExternalStorageDirectoryPath)
    //   .then(files => {
    //     Alert.alert(files[0].path);
    //   })
    //   .catch(err => {
    //     Alert.alert(err.message, err.code);
    //   });

    // RNFS.readDir(RNFS.ExternalDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    //   .then(result => {
    //     // stat the first file
    //     return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //   })
    //   .then(statResult => {
    //     if (statResult[0].isFile()) {
    //       // if we have a file, read it
    //       return RNFS.readFile(statResult[1], 'utf8');
    //     }

    //     return 'no file';
    //   })
    //   .then(contents => {
    //     // log the file contents
    //     Alert.alert(contents);
    //   })
    //   .catch(err => {
    //     Alert.alert(err.message, err.code);
    //   });
  };

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }
  render() {
    // const sourse = __DEV__ ? require('../assets/images/ammeter.png') : require('../assets/images/ammeter.png')
    return (
      <View style={styles.container}>
        <View style={styles.container} contentContainerStyle={{paddingTop: 30}}>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.lighter,
            }}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image
                source={require('../assets/images/file.png')}
                style={{width: 200, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
