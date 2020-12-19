import firebase from 'firebase';
import '@firebase/auth';
import {GET_USERS} from './types';
import * as RooterNavigation from '../../RooterNavigation.js';

export const getUsers = () => {
  const {currentUser} = firebase.auth();
  const Uid = currentUser.uid;
  let gecici = [];
  return (dispatch) => {
    firebase
      .database()
      .ref('/kullanicilar')
      .on('value', (data) => {
        gecici = [];
        data.forEach((dataFriend) => {
          if (dataFriend.val().Kid == Uid) {
            null;
          } else {
            gecici.push({
              id: dataFriend.key,
              ...dataFriend.val(),
            });
          }
        });
        dispatch({type: GET_USERS, payload: gecici});
      });
  };
};
