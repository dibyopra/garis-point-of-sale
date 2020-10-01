import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {DashboardRoutes} from '@core/interfaces';
import {DashboardScreen} from './dashboard_screen/dashboard_screen';
import {DetailScreen} from './detail_screen/detail_screen';

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
