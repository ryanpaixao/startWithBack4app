import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { doUserRegistration } from '../Api';

import FacebookIcon from '../Assets/icon-facebook.png';
import GoogleIcon from '../Assets/icon-google.png';
import AppleIcon from '../Assets/icon-apple.png';
import Styles from '../Styles';

const UserRegistration = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Username'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => doUserRegistration(username, password)}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Sign Up'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.login_social}>
        <View style={Styles.login_social_separator}>
          <View style={Styles.login_social_separator_line} />
          <Text style={Styles.login_social_separator_text}>{'or'}</Text>
          <View style={Styles.login_social_separator_line} />
        </View>
        <View style={Styles.login_social_buttons}>
          <TouchableOpacity>
            <View
              style={[
                Styles.login_social_button,
                Styles.login_social_facebook,
              ]}>
              <Image style={Styles.login_social_icon} source={FacebookIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image style={Styles.login_social_icon} source={GoogleIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image style={Styles.login_social_icon} source={AppleIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
          <Text style={Styles.login_footer_text}>
            {'Already have an account? '}
            <Text style={Styles.login_footer_link}>{'Log In'}</Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

export default UserRegistration;
