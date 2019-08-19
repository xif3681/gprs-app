'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Colors from '../constants/Colors';
class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
      gprs: require('../assets/data/gprs.json'),
    };
  }
  static navigationOptions = {
    title: '二维码/条码',
    headerStyle: {
      backgroundColor: Colors.default,
    },
    headerTintColor: Colors.white,
  };

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(this.state.moveAnim, {
      toValue: -200,
      duration: 1500,
      easing: Easing.linear,
    }).start(() => this.startAnimation());
  };
  //  识别二维码
  onBarCodeRead = result => {
    const {navigate} = this.props.navigation;
    const student = this.state.gprs.student;
    const {data} = result;
    // let hascode = false;
    student.some(item => {
      if (data === item.number) {
        navigate('Details', {data: data, student: item});
        return true;
      } else {
        navigate('NotFind', {data: data});
        return false;
      }
    });
    // if (hascode) {
    //   navigate('Details', { data: data, student: item })
    // } else {
    //   navigate('NotFind', { data: data })
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={this.onBarCodeRead}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
            <Animated.View
              style={[
                styles.border,
                {transform: [{translateY: this.state.moveAnim}]},
              ]}
            />
            <Text style={styles.rectangleText}>
              将二维码/条码放入框内，即可自动扫描
            </Text>
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'transparent',
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10,
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: '#00FF00',
  },
});
