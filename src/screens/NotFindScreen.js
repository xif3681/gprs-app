import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Colors from '../constants/Colors';

export default class NotFindScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.default,
      },
      headerTintColor: Colors.white,
    };
  };
  onPressLearnMore = () => {
    // this.props.navigation.navigate('Home');
    this.props.navigation.navigate('Read');
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.default}}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: Colors.white}}>查询失败!</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            onPress={this.onPressLearnMore}
            title="关闭"
            color="#00acc1"
            accessibilityLabel="close"
          />
        </View>
      </View>
    );
  }
}
