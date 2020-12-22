import React, {Component} from 'react';
import firebase from 'firebase';
import '@firebase/auth';
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
  state={
     user : firebase.auth(),
  }
  
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <View style={{alignItems: 'center',flex:1,backgroundColor:"#34495E"}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold',color:"#D35400"}}>CHAT APP</Text>
          <Text style={{color:"#DC7633"}}>
            {this.state.user.currentUser.displayName.toUpperCase()}{' '}
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
                  backgroundColor: '#1B2631',
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
                  <Text style={{color:"#ECF0F1",fontWeight:"bold"}}>
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
