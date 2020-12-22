import firebase from 'firebase';
import '@firebase/auth';
import {GET_MESSAGE, SEND_MESSAGE, GET_UID} from './types';
import * as RooterNavigation from '../../RooterNavigation.js';

export const getMessage = (Kid) => {
  const {currentUser} = firebase.auth();
  const Uid = currentUser.uid;
  let messageId = '';
  if (Kid < Uid) {
    messageId = Kid + Uid;
  } else {
    messageId = Uid + Kid;
  }

  return (dispatch) => {
    firebase
      .database()
      .ref('/mesajlar/' + messageId)
      .on('value', (messageData) => {
        const messages = [];
        messageData.forEach((dataFriend) => {
          messages.push({
            id: dataFriend.key,
            ...dataFriend.val(),
          });
        }),
          dispatch({type: GET_MESSAGE, payload: messages});
      });
  };
};

export const sendMessage = (Kid, messageText) => {
  const zaman = new Date().getTime();
  const {currentUser} = firebase.auth();
  const Uid = currentUser.uid;
  const Uname = currentUser.displayName;
  let messageId = '';
  if (Kid < Uid) {
    messageId = Kid + Uid;
  } else {
    messageId = Uid + Kid;
  }
  return (dispatch) => {
    firebase
      .database()
      .ref('/mesajlar/' + messageId)
      .push({
        Uid,
        isim: Uname,
        text: messageText,
        zaman,
      });
  };
};

export const getUid = () => {
  const {currentUser} = firebase.auth();
  const Uid = currentUser.uid;

  return (dispatch) => {
    dispatch({type: GET_UID, payload: Uid});
  };
};
