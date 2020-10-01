import React from 'react';
import {ItemTransaction, transactionHistory} from './item_transaction';
import { Box } from '@core/components';

const data: transactionHistory[] = [
  {
    id: 'OKDAO/2020/19-29',
    date: '18-09 | 2020',
    total: 300000,
    kasir: 'Dibyo prawiro',
    items: [
      {
        productName: 'Sunset trip mango pineapple Sunset trip ma',
        price: 100000,
        qty: 4,
        total: 400000,
      },
    ],
  },{
    id: 'OKDAI/2020/19-29',
    date: '18-09 | 2020',
    total: 300000,
    kasir: 'Dibyo prawiro',
    items: [
      {
        productName: 'Sunset trip mango pineapple Sunset trip ma',
        price: 100000,
        qty: 4,
        total: 400000,
      },
      {
        productName: 'Sunset trip mango pineapple Sunset',
        price: 100000,
        qty: 4,
        total: 400000,
      },
    ],
  },
];

export const ListTransaction = (): JSX.Element => {
  return (
      <Box>
          {data.map((item) => (
              <ItemTransaction data={item} key={item.id} />
          ))}
      </Box>
  );
};
