import React from 'react';
import {DashboardNavigationProps} from '@core/interfaces';
import {AppLayout, Header, ScrollView} from '@core/components';
import {DataPoint, Graph, Info} from '@dashboard/components';
import {ItemCabang, dataCabang} from '../dashboard_screen/components';
import {ListTransaction} from './components';

const data: DataPoint[] = [
  {
    value: 184000,
    title: '1',
  },
  {
    value: 112000,
    title: '2',
  },
  {
    value: 230000,
    title: '3',
  },
  {
    value: 150000,
    title: '4',
  },
  {
    value: 242600,
    title: '5',
  },
  {
    value: 243000,
    title: '6',
  },
  {
    value: 282000,
    title: '7',
  },
];

const detailCabang: dataCabang = {
  id: 'pandaan',
  namaCabang: 'Pandaan',
  totalOmset: 172600,
  presentase_cabang: 30,
  presentase_pusat: 60,
  total_cabang: 100000,
  total_pusat: 150000,
  tranksaksi: 145,
  hpp: 200000,
  mrsp: 150000,
};

export const DetailScreen = ({
  route,
}: DashboardNavigationProps<'Detail'>): JSX.Element => {
  const {name} = route.params;
  const title = `Detail ${name}`;
  return (
    <AppLayout header={<Header back {...{title}} />}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} >
        <Info />
        <Graph {...{data}} />
        <ItemCabang data={detailCabang} />
        <ListTransaction />
      </ScrollView>
    </AppLayout>
  );
};
