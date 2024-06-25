import React from 'react';
//@ts-ignore
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import LoginScreen from '../screen/authScreen/Login';
import { ScreenNames } from '../utils/ScreenNames';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.LoginScreen}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
