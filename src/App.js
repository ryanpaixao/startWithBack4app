/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-community/async-storage';

import keys from '../constants/Keys/Keys';
import UserRegistration from './Services/UserRegistration';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

// export const App: () => React$Node = () => {
const App = () => {
  // useEffect(() => {
  //   createInstallation = async () => {
  //     const Installation = Parse.Object.extend(Parse.Installation);
  //     const installation = new Installation();

  //     installation.set('deviceType', Platform.OS);
  //     await installation.save();
  //   };

  //   createInstallation();
  // }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <>
          <Text style={styles.title}>React Native on Back4App</Text>
          <Text>User registration tutorial</Text>
          <UserRegistration />
        </>
      </SafeAreaView>
    </>
  );
};

// Remember to add some styles at the end of your file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
