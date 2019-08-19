import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';

export default class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerStyle: {
        backgroundColor: Colors.default,
      },
      headerTintColor: Colors.white,
      headerTitle: '信息详情',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
          <Image
            source={require('../assets/images/scanning3.png')}
            style={{width: 40, marginRight: 30}}
          />
        </TouchableOpacity>
      ),
    };
  };

  _renderItem = ({item}) => (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 30,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Image source={item.avatar} style={{height: 50, width: 50}} />
      <View
        style={{
          paddingLeft: 10,
          height: 70,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text style={styles.item}>{item.name}</Text>
      </View>
    </View>
  );

  render() {
    const {navigation} = this.props;
    const data = navigation.getParam('data', 'NO-ID');
    const student = navigation.getParam('student', 'NO-ID');
    const dataSourse = [
      {
        name: student.username,
        key: 'username',
        avatar: require('../assets/images/user.png'),
      },
      {
        name: data,
        key: 'userNumber',
        avatar: require('../assets/images/usernum.png'),
      },
      {
        name: student.address,
        key: 'address',
        avatar: require('../assets/images/address.png'),
      },
      {
        name: student.number,
        key: 'number',
        avatar: require('../assets/images/gprs.png'),
      },
    ];;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <FlatList data={dataSourse} renderItem={this._renderItem} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});;
