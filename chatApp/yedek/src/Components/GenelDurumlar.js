import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {UserDataGetAction} from '../redux/action';
import {connect} from 'react-redux';
import _ from 'lodash';

class GenelDurumlar extends Component {
  componentDidMount() {
    this.props.UserDataGetAction();
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#212F3D"}}>
       

        <FlatList
          data={this.props.userData}
          renderItem={({item}) => (
            <View style={{flexDirection: 'column'}}>
                {console.log(item)}
              <View style={{flexDirection: 'column',marginTop:20}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{
                      marginLeft: width * 0.05,
                      alignSelf: 'center',
                      width: width * 0.13,
                      height: width * 0.13,
                    }}
                    source={require('./image/profilePhoto.png')}></Image>
                  <Text
                    style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold',color:"#CA6F1E",fontSize:16}}>
                    {item.userName}
                  </Text>
                </View>
                <View style={{paddingHorizontal: 40}}>
                  <Text style={{textAlign: 'center',color:"#ECF0F1",fontSize:14}}>
                   {item.text}
                  </Text>
                </View>
              </View>
              <View
                style={{
                
                  borderBottomColor: '#1C2833',
                  borderBottomWidth: 1,
                  marginTop:20
                  
                }}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = ({userUpdateResponse}) => {
  const userDataTmp = _.map(userUpdateResponse, (val, uid) => {
    return {...val, uid};
  });
  const userData = _.reverse(userDataTmp);

  {
    console.log(userData, ' mapstate');
  }
  return {
    userData,
  };
};

export default connect(mapStateToProps, {
  UserDataGetAction,
})(GenelDurumlar);
