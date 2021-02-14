import { StyleSheet } from 'react-native';

const UserRegistrationScreenStyles = StyleSheet.create({
  login_container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  login_header: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: '#208AEC',
  },
  login_header_logo: {
    width: 220,
    resizeMode: 'contain',
  },
  login_header_text: {
    marginTop: 15,
    color: '#f0f0f0',
    fontSize: 16,
  },
  login_header_text_bold: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserRegistrationScreenStyles;
