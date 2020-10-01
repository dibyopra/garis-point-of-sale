import React from 'react';

import {AppLayout, Header, Box,  ScrollView} from '@core/components';
import {DashboardNavigationProps} from '@core/interfaces';
import {Graph, DataPoint, Info} from '@dashboard/components';

import {ListCabang} from './components';

const data: DataPoint[] = [
  {
    value: 184000,
    title: 'JKT',
  },
  {
    value: 112000,
    title: 'SBY',
  },
  {
    value: 230000,
    title: 'MLG',
  },
  {
    value: 150000,
    title: 'PAS',
  },
  {
    value: 242600,
    title: 'LAM',
  },
  {
    value: 243000,
    title: 'BGL',
  },
  {
    value: 282000,
    title: 'PGN',
  },
];

export const DashboardScreen = ({
  navigation,
}: DashboardNavigationProps<'Dashboard'>): JSX.Element => {
  const goToDetail = (params: {id: string; name: string}) => {
    navigation.navigate('Detail', params);
  };
  return (
    <AppLayout
      showInternetConnection
      variant="default"
      header={
        <Header
          drawer
          title="Dashboard"
        />
      }>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Info />
        <Box>
          <Graph {...{data}} />
        </Box>
        <ListCabang navigate={goToDetail} />
      </ScrollView>
    </AppLayout>
  );
};
