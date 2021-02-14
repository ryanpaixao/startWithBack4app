import { StyleSheet } from 'react-native';

const UserLogInStyles = StyleSheet.create({
  login_wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: -10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 280,
  },
  form_input: {
    height: 44,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#EDF0F7',
    borderRadius: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: '#0065A4',
    borderRadius: 50,
  },
  button_label: {
    color: '#fff',
    fontSize: 15,
  },
  login_social: {
    width: '100%',
    maxWidth: 280,
    marginTop: 20,
  },
  login_social_separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login_social_separator_line: {
    flex: 1,
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  login_social_separator_text: {
    marginHorizontal: 10,
    color: '#808080',
    fontSize: 16,
  },
  login_social_buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  login_social_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 60,
  },
  login_social_icon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  login_social_facebook: {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
  },
});

export default UserLogInStyles;
