import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeRoutes} from '@core/interfaces';
import {DrawerContent, DRAWER_WIDTH} from '../drawer';
import {DashboardStack} from '@dashboard/screens';
import {FinancialStatementsStack} from '@financial_statements/screens';
import { VoucherScreen } from '@voucher/screens/voucher_screen';
import { TransactionStack } from '@app/modules/transaction/screens';

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeStack = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContent={DrawerContent}
      drawerStyle={{width: DRAWER_WIDTH}}>
      <Drawer.Screen component={DashboardStack} name="Dashboard" />
      <Drawer.Screen
        component={FinancialStatementsStack}
        name="FinancialStatements"
        options={{title: 'Laporan Keuangan'}}
      />
      <Drawer.Screen
        component={VoucherScreen}
        name="Voucher"
        options={{title: 'Voucher Promo'}}
      />
      <Drawer.Screen
        component={TransactionStack}
        name="Transaction"
        options={{title: 'Transaksi / Produk'}}
      />
    </Drawer.Navigator>
  );
};
