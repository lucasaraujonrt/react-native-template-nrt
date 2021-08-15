import Toast from 'react-native-toast-message';

export const success = (message: string, description: string) =>
  Toast.show({
    text1: message,
    text2: description,
    type: 'success',
    position: 'top',
    autoHide: true,
    visibilityTime: 4000,
  });

export const error = (message: string, description: string) =>
  Toast.show({
    text1: message,
    text2: description,
    type: 'error',
    position: 'top',
    autoHide: true,
    visibilityTime: 4000,
  });

export const info = (message: string, description: string) =>
  Toast.show({
    text1: message,
    text2: description,
    type: 'info',
    position: 'top',
    autoHide: true,
    visibilityTime: 4000,
  });
