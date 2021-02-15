import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';

import { UserLogIn } from '../Services';

import Back4AppIcon from '../Assets/logo-back4app.png';
import Styles from '../Styles';

const UserLogInScreen = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image style={Styles.login_header_logo} source={Back4AppIcon} />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User login'}
          </Text>
        </View>
        <UserLogIn />
      </SafeAreaView>
    </>
  );
};

export default UserLogInScreen;
