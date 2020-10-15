import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import {AppRoutes} from '@core/interfaces';
import {HomeStack} from './home_stack';
import { LoginScreen } from '@authentication/screens';

const Stack = createStackNavigator<AppRoutes>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }}>
        <Stack.Screen component={LoginScreen} name="Authentication" />
        <Stack.Screen component={HomeStack} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
