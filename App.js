import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/routes/MainStack';

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
