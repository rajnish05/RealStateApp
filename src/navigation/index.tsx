import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import AuthStack from './AuthStack';
import AppStack from './Appstack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { DataProvider } from '../context/DataProvider';
import ToastNotifier from '../component/ToastNotifier';

const NavigationStructue = () => {

  const [initializing, setInitializing] = useState<Boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  /** 
   * @author Rajnish Kumar
   * @param user (any): Represents the current user's authentication state. 
   * It can be null if no user is authenticated or a User object if a user is authenticated.
   */
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <DataProvider>
      <NavigationContainer ref={navigationRef}>
        {Boolean(user) ? <AppStack /> : <AuthStack />}
      <ToastNotifier />
      </NavigationContainer>
    </DataProvider>
  );
}

export default NavigationStructue;