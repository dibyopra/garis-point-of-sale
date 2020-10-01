import React from 'react';
import {Box} from '@core/components';
import {KasItem, KasItemInteraface} from './kas_item';

const data: KasItemInteraface[] = [
  {
    debit: 1590000,
    kredit: 1525000,
    id: 'Saldo Akhir',
    value: 'Saldo Akhir',
    saldo: 9300000,
    received: true,
  },
  {
    debit: 1590000,
    kredit: 1525000,
    id: 'Sebelum',
    value: 'Sebelum',
    saldo: 9300000,
    received: true,
  },
  {
    debit: 0,
    kredit: 1525000,
    id: 'STR/09/2020/00008',
    saldo: 9300000,
    date: '15/09/2020',
  },
  {
    debit: 1525000,
    kredit: 0,
    id: 'STR/09/2020/00007',
    saldo: 9300000,
    date: '15/09/2020',
    received: true,
  },
  {
    debit: 1525000,
    kredit: 0,
    id: 'STR/09/2020/00006',
    saldo: 9300000,
    date: '15/09/2020',
  },
];

interface ListKasProps {}

export const KasList = (): JSX.Element => {
  return (
    <Box>
      {data.map((item) => (
        <KasItem key={item.id} {...{item}} />
      ))}
    </Box>
  );
};
