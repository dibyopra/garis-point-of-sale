import React from 'react';
import {TransactionRoutes} from '@core/interfaces';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ProductStack} from '@product/screens';

import {CartScreen} from './cart_screen/cart_screen';

const Stack = createStackNavigator<TransactionRoutes>();

export const TransactionStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen component={ProductStack} name="Product" />
      <Stack.Screen component={CartScreen} name="Cart" />
    </Stack.Navigator>
  );
};
