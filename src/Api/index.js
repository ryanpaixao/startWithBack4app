import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

/*************** Authentication ****************/
/** User LogIn */
const doUserLogIn = async function (username, password, logInCB) {
  const usernameValue = username;
  const passwordValue = password;
  return await Parse.User.logIn(usernameValue, passwordValue)
    .then(async (loggedInUser) => {
      // logIn returns the corresponding ParseUser object
      Alert.alert(
        'Success!',
        `User ${loggedInUser.get('username')} has successfully signed in!`,
      );
      // To verify that this is in fact the current user, currentAsync can be used
      const currentUser = await Parse.User.currentAsync();
      console.log(loggedInUser === currentUser);
      // Fire LogIn callback
      logInCB();
      return true;
    })
    .catch((error) => {
      // Error can be caused by wrong parameters or lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    });
};

/** User LogOut */
const doUserLogOut = async function (logOutCB) {
  return await Parse.User.logOut()
    .then(async () => {
      const currentUser = await Parse.User.currentAsync();
      if (currentUser === null) {
        Alert.alert('Success!', 'No user is logged in anymore!');
      }
      logOutCB();
    })
    .catch((error) => {
      Alert.alert('Error!', error.message);
      return false;
    });
};

/** Register User */
const doUserRegistration = async function (username, password) {
  // Note that this values come from state variables that we've declared before
  const usernameValue = username;
  const passwordValue = password;
  // Since the signUp method returns a Promise, we need to call it using await
  return await Parse.User.signUp(usernameValue, passwordValue)
    .then((createdUser) => {
      // Parse.User.signUp returns the already created ParseUser object if successful
      Alert.alert(
        'Success!',
        `User ${createdUser.getUsername()} was successfully created!`,
      );
      return true;
    })
    .catch((error) => {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      Alert.alert('Error!', error.message);
      return false;
    });
};
/********************^^^^^^^^^**********************/

/****************** Person Class ****************/
/** Save New Person */
const saveNewPerson = async function () {
  // Creating new subclasses using Parse.Object.
  const Person = Parse.Object.extend('Person');

  // Create a new instance of that class.
  const person = new Person();

  // set attributes of instance
  person.set('name', 'Jon Snow');
  person.set('age', 27);
  try {
    let result = await person.save();
    Alert.alert(`New object created with objectId: ${result.id}`);
  } catch (error) {
    Alert.alert(
      `Failed to create new object, with error code: ${error.message}`,
    );
  }
};
/********************^^^^^^^^^**********************/

export { doUserLogIn, doUserLogOut, doUserRegistration, saveNewPerson };
