import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import AuthStack from './AuthStack';
import AppStack from './Appstack';
import auth from '@react-native-firebase/auth';
import { DataProvider } from '../context/DataProvider';


const NavigationStructue = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
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
      </NavigationContainer>
    </DataProvider>
  );
}

export default NavigationStructue;