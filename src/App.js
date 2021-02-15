import React from 'react';
import 'react-native-gesture-handler';

// In a React Native application
import AsyncStorage from '@react-native-community/async-storage';
import Parse from 'parse/react-native.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { APPLICATION_ID, JAVASCRIPT_ID, HOST_URL } from './constants/Keys';
import { HomeScreen, UserLogInScreen, UserRegistrationScreen } from './Views';

// Parse initialization configuration
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(APPLICATION_ID, JAVASCRIPT_ID);
Parse.serverURL = HOST_URL;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={UserLogInScreen} />
        <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
