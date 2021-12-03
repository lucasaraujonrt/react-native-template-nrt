import React from 'react';

import codePush from 'react-native-code-push';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import AppContent from './AppContent';
import store from './store';

import theme from './theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContent />
        <FlashMessage position="top" />
      </ThemeProvider>
    </Provider>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
