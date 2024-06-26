import React from 'react';
import {Dimensions} from 'react-native'; 
import Toast from 'react-native-toast-message';
import toastConfig from './toastConfig';

const {height} = Dimensions.get('window');

const ToastNotifier = () => { 

  return (
    <Toast
      config={toastConfig}
      autoHide={true}
      bottomOffset={height * 0.13}
      position="bottom"
      visibilityTime = {5000}
      
    />
  );
};

export default ToastNotifier;
