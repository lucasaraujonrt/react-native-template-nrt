import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { navigationRef } from './services/navigation';
import Navigator from './stack';

class AppContent extends PureComponent {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" animated />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <NavigationContainer ref={navigationRef}>
            <Navigator />
          </NavigationContainer>
        </KeyboardAvoidingView>
      </>
    );
  }
}

export default AppContent;
