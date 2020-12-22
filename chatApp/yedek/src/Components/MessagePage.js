import {Textarea} from 'native-base';
import React, {Component} from 'react';
import {Text, View, FlatList, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getMessage, sendMessage, getUid} from '../redux/action';
const {width, height} = Dimensions.get('window');

class MessagePage extends Component {
  state = {
    note: '',
  };
  componentDidMount() {
    this.props.getUid();
    this.props.getMessage(this.props.route.params.usersData.Kid);
  }

  sendMessageLocal() {
    this.props.sendMessage(
      this.props.route.params.usersData.Kid,
      this.state.note,
    );
    this.setState({note: ''});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>
            {this.props.route.params.usersData.isim.toUpperCase() +
              ' ' +
              this.props.route.params.usersData.soyisim.toUpperCase()}{' '}
          </Text>
        </View>

        <FlatList
          data={this.props.getMessageContent}
          renderItem={({item}) => (
            <View>
              {item.Uid == this.props.Uid ? (
                <View style={{flexDirection: 'row-reverse'}}>
                  <View>
                    <Text
                      style={{
                        borderRadius: 5,
                        paddingHorizontal: height * 0.015,
                        paddingVertical: height * 0.007,
                        backgroundColor: '#702963',
                        margin: 5,
                        elevation: 2,
                        color: '#FFFFFF',
                      }}>
                      {item.text}
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        borderRadius: 5,
                        paddingHorizontal: height * 0.015,
                        paddingVertical: height * 0.007,
                        backgroundColor: '#29706F',
                        margin: 5,
                        elevation: 2,
                        color: '#FFFFFF',
                      }}>
                      {item.text}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={{flexDirection: 'row'}}>
          <View>
            <Textarea
              style={{width: width * 0.9}}
              rowSpan={2}
              onChangeText={(note) => {
                this.setState({note});
              }}
              value={this.state.note}
              bordered
              placeholder="MESAJ YAZ"
            />
          </View>

          <View style={{width: width * 0.1, justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                this.state.note.trim() == '' ? null : this.sendMessageLocal();
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  width: width * 0.05,
                  height: width * 0.05,
                }}
                source={require('./image/send.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({messageResponse}) => {
  const {getMessage} = messageResponse;
  const {Uid} = messageResponse;
  const getMessageContent = getMessage;
  return {
    Uid,
    getMessageContent,
  };
};

export default connect(mapStateToProps, {getMessage, sendMessage, getUid})(
  MessagePage,
);
