import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { saveNewPerson } from '../Api';

import Styles from '../Styles';

const UserInfoEntry = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={name}
          placeholder={'Your name'}
          onChangeText={(text) => setName(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={age}
          placeholder={'Your age'}
          onChangeText={(text) => setAge(text)}
        />
        <TouchableOpacity onPress={() => saveNewPerson(name, age)}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Save details'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfoEntry;
