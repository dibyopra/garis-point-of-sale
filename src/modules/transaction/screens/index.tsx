import React from 'react';
import {TransactionRoutes, CartRoutes} from '@core/interfaces';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ProductStack} from '@product/screens';

import {CartScreen} from './cart_screen/cart_screen';
import { CheckoutScreen } from './checkout_screen/checkout_screen';

const Stack = createStackNavigator<TransactionRoutes>();

const StackCart = createStackNavigator<CartRoutes>();

const CartStack = (): JSX.Element => {
  return (
    <StackCart.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <StackCart.Screen component={CartScreen} name="Cart" />
      <StackCart.Screen component={CheckoutScreen} name="Checkout" />
    </StackCart.Navigator>
  );
};

export const TransactionStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen component={ProductStack} name="Product" />
      <Stack.Screen component={CartStack} name="Cart" />
    </Stack.Navigator>
  );
};
