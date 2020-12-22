import {USER_UPDATE, GET_USER_DATA} from './types';
import firebase from 'firebase';
import '@firebase/auth';
import {Alert} from 'react-native';

export const UserDataUpdateAction = (note) => {
  const {currentUser} = firebase.auth();
  const kid = currentUser.uid;
  const userName = currentUser.displayName;
  firebase
  .database()
  .ref('/durumlar')
  .push({userName, text: note,kid}).then(()=>{ Alert.alert(
    'Başarılı',
    'Durumunuz başarılı bir şekilde paylaşıldı',
    [{text: 'TAMAM', onPress: () =>null}],
    {cancelable: false},
  );
  }).catch(()=>{

    Alert.alert(
      'Hata',
      'Durumunuz paylaşılamadı lütfen tekrar deneyiniz',
      [{text: 'TAMAM', onPress: () => null}],
      {cancelable: false},
    );

  })
    return (dispatch) => {
    null;
  };
};

export const UserDataGetAction = () => {
  const {currentUser} = firebase.auth();
  const id = currentUser.uid;
  const userName = currentUser.displayName;
  return (dispatch) => {

    firebase
      .database()
      .ref('/durumlar')
      .on('value', (data) => {
        console.log(data.val()," vall")
        dispatch({type: GET_USER_DATA, payload: data.val()});
      });

  };
};
