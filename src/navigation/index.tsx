import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import AuthStack from './AuthStack';
import AppStack from './Appstack';
import auth from '@react-native-firebase/auth';
// import { initializeApp } from '@react-native-firebase/app';


// const firebaseConfig = {
//   apiKey: 'AIzaSyBmT2EFgfcGn6Xf8HQOdXJSz7PwswWzUtA',
//   projectId: 'realstateapp-3df52',
//   storageBucket: 'realstateapp-3df52.appspot.com',
//   messagingSenderId: '783531296184',
//   appId: '1:783531296184:ios:dd65b908f62e689c913b4d',
//  };



const NavigationStructue = () => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  // useEffect(() => {
  //   // Check if Firebase app is already initialized
  //   if (!initializeApp.length) {
  //     initializeApp(firebaseConfig);
  //   }
  // }, []);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    console.log("🚀 ~ onAuthStateChanged ~ user:", user)
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {Boolean(!user) ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default NavigationStructue;