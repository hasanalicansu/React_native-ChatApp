import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {getUsers} from '../redux/action';

const {width, height} = Dimensions.get('window');

class HomeChat extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>CHAT APP</Text>
          <Text>
            {this.props.route.params.currentUser.displayName.toUpperCase()}{' '}
          </Text>
        </View>
        <FlatList
          data={this.props.usersData}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Message', {usersData: item})
              }>
              <View
                style={{
                  elevation: 2,
                  borderRadius: 7,
                  width: width * 0.9,
                  backgroundColor: '#CEF9FF',
                  height: height * 0.12,
                  margin: height * 0.007,
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                  <Image
                    style={{
                      marginLeft: width * 0.05,
                      alignSelf: 'center',
                      width: width * 0.13,
                      height: width * 0.13,
                    }}
                    source={require('./image/profilePhoto.png')}></Image>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 15,
                    marginLeft: 15,
                  }}>
                  <Text>
                    {item.isim.toUpperCase()} {item.soyisim.toUpperCase()}{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = ({userListResponse}) => {
  const {usersData} = userListResponse;

  return {
    usersData,
  };
};

export default connect(mapStateToProps, {getUsers})(HomeChat);
