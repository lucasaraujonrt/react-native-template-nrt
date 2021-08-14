import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AppContent from './AppContent';
import store from './store';

import themes from './theme';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;
  console.log('theme', deviceTheme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
