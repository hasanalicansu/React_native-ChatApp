import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navigationRef} from './RooterNavigation';
import LoginPage from './Components/LoginPage';

import Register from './Components/Register';
import HomeChat from './Components/HomeChat';
import MessagePage from './Components/MessagePage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'HomeChat',
          
        }}
        name="HomeChat"
        component={HomeChat}
      />
      <Tab.Screen
        options={{
          title: 'HomeChat2',
          
        }}
        name="HomeChat2"
        component={HomeChat}
      />
      
    </Tab.Navigator>
  );
}


const RooterComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeChat" component={HomeChat} />
        <Stack.Screen name="Message" component={MessagePage} />
        <Stack.Screen name="a" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RooterComponent;
//<Stack.Screen name="HomeChat" component={HomeChat} />