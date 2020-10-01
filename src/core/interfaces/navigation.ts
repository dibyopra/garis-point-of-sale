import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    StackNavigationProp<AppRoutes, 'Home'>
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthenticationRoutes = {
  Login: undefined;
};

export type HomeRoutes = {
  Dashboard: undefined;
  FinancialStatements: undefined;
  Voucher: undefined;
  Transaction: undefined;
};

export interface DashboardNavigationProps<
  RouteName extends keyof DashboardRoutes
> {
  navigation: StackNavigationProp<DashboardRoutes, RouteName>;
  route: RouteProp<DashboardRoutes, RouteName>;
}

export type DashboardRoutes = {
  Dashboard: undefined;
  Detail: {id: string; name: string};
};

export interface FinancialStatementsNavigationProps<
  RouteName extends keyof FinancialStatementsRoutes
> {
  navigation: StackNavigationProp<FinancialStatementsRoutes, RouteName>;
  route: RouteProp<FinancialStatementsRoutes, RouteName>;
}

export type FinancialStatementsRoutes = {
  BranchBalance: undefined;
  CashFlow: {id: string; name: string};
};

export interface VoucherNavigationProps<RouteName extends keyof VoucherRoutes> {
  navigation: StackNavigationProp<VoucherRoutes, RouteName>;
  route: RouteProp<VoucherRoutes, RouteName>;
}

export type VoucherRoutes = {
  Voucher: undefined;
};

export interface TransactionNavigationProps<
  RouteName extends keyof TransactionRoutes
> {
  navigation: StackNavigationProp<TransactionRoutes, RouteName>;
  route: RouteProp<TransactionRoutes, RouteName>;
}

export type TransactionRoutes = {
  Product: undefined;
  Cart: undefined;
};

export interface ProductNavigationProps<RouteName extends keyof ProductRoutes> {
  navigation: StackNavigationProp<ProductRoutes, RouteName>;
  route: RouteProp<ProductRoutes, RouteName>;
}

export type ProductRoutes = {
  Product: undefined;
};

export interface CartNavigationProps<RouteName extends keyof CartRoutes> {
  navigation: StackNavigationProp<CartRoutes, RouteName>;
  route: RouteProp<CartRoutes, RouteName>;
}

export type CartRoutes = {
  Cart: undefined;
};
