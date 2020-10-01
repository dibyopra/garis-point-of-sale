import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '@authentication/screens';
import { AuthenticationRoutes } from '@core/interfaces';

const Stack = createStackNavigator<AuthenticationRoutes>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={LoginScreen} name="Login" />
    </Stack.Navigator>
  );
};
