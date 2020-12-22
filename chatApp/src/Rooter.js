import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {navigationRef} from './RooterNavigation';
import LoginPage from './Components/LoginPage';

import Register from './Components/Register';
import HomeChat from './Components/HomeChat';
import MessagePage from './Components/MessagePage';
import Durum from './Components/Durum';
import GenelDurumlar from './Components/GenelDurumlar';
import SideBar from './Components/CustomDrawer';
import {Image} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  //tab navigator
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#1C2833',
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Mesajlar',
          tabBarIcon: () => (
            <Image
              style={{width: 22, height: 22, tintColor: 'white'}}
              source={require('../src/Components/image/chat.png')}
            />
          ),
        }}
        name="Mesajlar"
        component={HomeChat}
      />
      <Tab.Screen
        options={{
          title: 'Durumlar',
          tabBarIcon: () => (
            <Image
              style={{width: 22, height: 22, tintColor: 'white'}}
              source={require('../src/Components/image/high-five.png')}
            />
          ),
        }}
        name="GenelDurumlar"
        component={GenelDurumlar}
      />
    </Tab.Navigator>
  );
}

function StackPage() {
  //genel sayfalar arası stack
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="Message" component={MessagePage} />
    </Stack.Navigator>
  );
}

function DrawerNavi() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="Home">
      <Drawer.Screen
        options={{
          title: 'Ana Sayfa',
          headerStyle: {
            backgroundColor: '#212F3D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Home"
        component={StackPage}
      />
      <Drawer.Screen
        options={{
          title: 'Durum',
        }}
        name="Durum"
        component={Durum}
      />
    </Drawer.Navigator>
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
        <Stack.Screen name="Main" component={DrawerNavi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RooterComponent;
//<Stack.Screen name="HomeChat" component={HomeChat} />
