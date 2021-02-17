import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import { HelloUser, UserInfoEntry, UserLogOut } from '../Components';

import Back4AppIcon from '../Assets/logo-back4app.png';
import Styles from '../Styles';

const HomeScreen = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <ScrollView>
          <View style={Styles.login_header}>
            <Image style={Styles.login_header_logo} source={Back4AppIcon} />
            <Text style={Styles.login_header_text}>
              <Text style={Styles.login_header_text_bold}>
                {'React Native on Back4App - '}
              </Text>
              {' Home'}
            </Text>
          </View>
          <HelloUser />
          <UserInfoEntry />
          <UserLogOut />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
