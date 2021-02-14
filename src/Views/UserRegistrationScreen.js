import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';

import { UserRegistration } from '../Services';
import { UserRegistrationScreenStyles as Styles } from './Styles';

const UserRegistrationScreen = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('../assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User registration'}
          </Text>
        </View>
        <UserRegistration />
      </SafeAreaView>
    </>
  );
};

export default UserRegistrationScreen;
