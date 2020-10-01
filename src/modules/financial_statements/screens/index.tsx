import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {FinancialStatementsRoutes} from '@core/interfaces';
import {BranchBalanceScreen} from './branch_balance_screen/branch_balance_screen';
import {CashFlowScreen} from './cash_flow_screen/cash_flow_screen';

const Stack = createStackNavigator<FinancialStatementsRoutes>();

export const FinancialStatementsStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="BranchBalance" component={BranchBalanceScreen} />
      <Stack.Screen name="CashFlow" component={CashFlowScreen} />
    </Stack.Navigator>
  );
};
