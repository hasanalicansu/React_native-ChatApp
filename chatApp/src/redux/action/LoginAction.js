import {Alert} from 'react-native';
import firebase from 'firebase';
import '@firebase/auth';
import {LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL} from './types';
import * as RooterNavigation from '../../RooterNavigation.js';

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    if (email === '' || password === '') {
      Alert.alert(
        'BOŞ ALAN',
        'Lütfen boş olan alanı doldurunuz',
        [{text: 'OK', onPress: () => loginFail(dispatch)}],
        {cancelable: false},
      );
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => loginSuccess(dispatch, user))
        .catch(err => {
          Alert.alert(
            'Sisteme girilemedi',
            'Yanlış E-mail veya şifre girildi',
            [{text: 'Tamam', onPress: () => loginFail(dispatch)}],
            {cancelable: false},
          )
        });
    }
  };
};

export const RegisterUser = ({isim, soyisim, email, password}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    if (email === '' || password === '' || isim === '' || soyisim === '') {
      Alert.alert(
        'BOŞ ALAN',
        'Lütfen boş olan alanı doldurunuz',
        [{text: 'OK', onPress: () => loginFail(dispatch)}],
        {cancelable: false},
      );
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => RegisterSuccess(dispatch, isim, soyisim, user))
        .catch(() => loginFail(dispatch));
    }
  };
};
//---------------------------------------------------------------------------------------------------------------------------------
const loginSuccess = (dispatch, user) => {
  const {currentUser} = firebase.auth();

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: currentUser,
  });
  RooterNavigation.navigate('Main');
};

//---------------------------------------------------------------------------------------------------------------------------------

const RegisterSuccess = async (dispatch, ad, soyad, user) => {
  try {
    const {currentUser} = firebase.auth();
    const Kid = currentUser.uid;
    const users = firebase.auth().currentUser;
    let isim = ad.toLowerCase();
    let soyisim = soyad.toLowerCase();
    firebase.database().ref('/kullanicilar/').push({Kid, isim, soyisim});

    await users.updateProfile({
      displayName: isim + ' ' + soyisim,
    });
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: currentUser,
    });
    RooterNavigation.navigate('Main');
  } catch (error) {
    console.log(error);
  }
};
//---------------------------------------------------------------------------------------------------------------------------------

const loginFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};
