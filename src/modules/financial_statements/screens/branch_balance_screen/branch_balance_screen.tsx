import React from 'react';
import {AppLayout, Header} from '@core/components';
import {FinancialStatementsNavigationProps} from '@core/interfaces';
import {ListCabang} from './components';

export const BranchBalanceScreen = ({
  navigation,
}: FinancialStatementsNavigationProps<'BranchBalance'>): JSX.Element => {
  const goToCashFlow = (params: {id: string; name: string}) => {
    navigation.navigate('CashFlow', params);
  };
  return (
    <AppLayout
      showInternetConnection
      header={
        <Header
          drawer
          title="Saldo Cabang"
        />
      }>
      <ListCabang navigate={goToCashFlow} />
    </AppLayout>
  );
};
