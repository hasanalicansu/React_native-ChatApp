import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/redux/reducer';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import {Text, View} from 'react-native';
import RooterComponent from './src/Rooter';


class App extends Component {
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAl66KwsJ9EW_K4M-0OKFBKZdLMInpNxA4',
      authDomain: 'chatapp-9b235.firebaseapp.com',
      databaseURL: 'https://chatapp-9b235.firebaseio.com',
      projectId: 'chatapp-9b235',
      storageBucket: 'chatapp-9b235.appspot.com',
      messagingSenderId: '525128281414',
      appId: '1:525128281414:web:d0e4442ec16879281d4947',
      measurementId: 'G-180M2X689L',
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <RooterComponent></RooterComponent>
      </Provider>
    );
  }
}

export default App;
