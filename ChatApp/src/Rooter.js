import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import {navigationRef} from './RooterNavigation';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import Register from './Components/Register';


const Stack = createStackNavigator();


const RooterComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RooterComponent;
