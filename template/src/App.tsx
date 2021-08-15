import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AppContent from './AppContent';
import store from './store';

import themes from './theme';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContent />
        <Toast ref={(ref) => Toast.setRef(ref)} style={{ marginTop: 20}} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
