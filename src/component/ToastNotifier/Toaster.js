import Toast from 'react-native-toast-message';

const success = message => {
  if (message) {
    Toast.show({
      type: 'success',
      text1: message,
    });
  }
};

const error = message => {
  if (message) {
    Toast.show({
      type: 'error',
      text1: message,
    });
  }
};

const warning = message => {
  if (message) {
    Toast.show({
      type: 'warning',
      text1: message,
    });
  }
};

export default {success, error, warning,};
