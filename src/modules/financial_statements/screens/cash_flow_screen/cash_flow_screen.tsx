import React from 'react';
import {
  AppLayout,
  Header,
  ScrollView,
  SearchDate,
} from '@core/components';
import {FinancialStatementsNavigationProps} from '@core/interfaces';
import {KasList} from './components/kas_list';

export const CashFlowScreen = ({
  route,
}: FinancialStatementsNavigationProps<'CashFlow'>): JSX.Element => {
  const {name} = route.params;
  return (
    <AppLayout
      showInternetConnection
      header={<Header title="Arus Kas" subtitle={name} back />}>
      <SearchDate />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} >
        <KasList />
      </ScrollView>
    </AppLayout>
  );
};
