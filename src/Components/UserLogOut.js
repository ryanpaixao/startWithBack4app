import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

import { doUserLogOut } from '../Api';
import Styles from '../Styles';

const UserLogOut = () => {
  const navigation = useNavigation();

  const logOutCB = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => doUserLogOut(logOutCB)}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Logout'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserLogOut;
