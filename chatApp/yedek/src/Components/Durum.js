import React, {Component} from 'react';
import firebase from 'firebase';
import '@firebase/auth';
import {Textarea, Button} from 'native-base';
import {Image, Text, View, Alert, ScrollView} from 'react-native';
import {UserDataUpdateAction} from '../redux/action';
import {connect} from 'react-redux';
import { navigationRef } from '../RooterNavigation';

class Durum extends Component {
  state = {
    user: firebase.auth(),
    note: '',
  };

  update() {
    if (this.state.note === '') {
      Alert.alert(
        'BOŞ ALAN',
        'Note ekleyiniz',
        [{text: 'OK', onPress: () => null}],
        {cancelable: false},
      );
    } else {
      this.props.UserDataUpdateAction(this.state.note);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>          
          <View style={{marginTop: 40, flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  width: 150,
                  height: 150,
                }}
                source={require('./image/profilePhoto.png')}></Image>

              <View style={{marginTop: 15}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    color: '#580024',
                  }}>
                  {this.state.user.currentUser.displayName}
                </Text>
                <View style={{width: 160, alignSelf: 'flex-start'}}>
                  <Text numberOfLines={5} style={{alignSelf: 'flex-start'}}>
                    {this.props.userData.text}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{alignSelf: 'center', marginTop: 20}}>
              <Textarea
                style={{width: 300}}
                rowSpan={5}
                onChangeText={(note) => {
                  this.setState({note});
                }}
                //value={this.state.note}
                bordered
                placeholder="Durum Oluştur"
              />
            </View>
            <View style={{flex: 1, marginTop: 30, alignSelf: 'center'}}>
              <Button
                onPress={() => {
                  this.update();
                }}>
                <Text style={{color: '#FFFFFF', marginHorizontal: 20}}>
                  OLUŞTUR
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({userUpdateResponse}) => {
  const userData = userUpdateResponse;

  return {
    userData,
  };
};

export default connect(mapStateToProps, {
  UserDataUpdateAction,
})(Durum);
