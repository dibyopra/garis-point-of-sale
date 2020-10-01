import React from 'react';
import {Box, Text} from '@core/components';

interface dataItem {
  productName: string;
  price: number;
  qty: number;
  total: number;
}

export interface transactionHistory {
  id: string;
  date: string;
  total: number;
  kasir: string;
  items: dataItem[];
}

interface ItemTransactionProps {
  data: transactionHistory;
}

export const ItemTransaction = ({data}: ItemTransactionProps): JSX.Element => {
  const {date, total, items, id, kasir} = data;
  return (
    <Box
      paddingHorizontal="m"
      paddingVertical="s"
      backgroundColor="mainBackground"
      marginBottom="l"
      elevation={2}
      marginHorizontal="xs"
      borderRadius="xs">
      {/* id */}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        borderBottomWidth={1}
        borderBottomColor="grey"
        paddingVertical="m">
        <Box flex={1} paddingRight="s">
          <Text variant="button" color="primary">
            {id}
          </Text>
        </Box>
        <Text variant="body">{date}</Text>
      </Box>
      {/* item */}
      {items.map((item) => {
        const {qty, price, productName, total} = item;
        return (
          <Box
            key={productName}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
            borderBottomWidth={1}
            borderBottomColor="grey"
            paddingVertical="m">
            <Box flex={1} paddingRight="s">
              <Text variant="body">{productName}</Text>
              <Text variant="body">
                Rp {price} x {qty}
              </Text>
            </Box>
            <Text variant="body">Rp {total}</Text>
          </Box>
        );
      })}
      <Box paddingVertical="s">
        {/* total */}
        <Box flexDirection="row" paddingTop="s">
          <Box flex={1} alignItems="flex-end">
            <Text variant="body">Total :</Text>
          </Box>
          <Box flex={1} alignItems="flex-end">
            <Text variant="body" textAlign="right">
              Rp {total}
            </Text>
          </Box>
        </Box>
        {/* kasir */}
        <Box flexDirection="row" paddingTop="s">
          <Box flex={1} alignItems="flex-end">
            <Text variant="body">Kasir :</Text>
          </Box>
          <Box flex={1} alignItems="flex-end">
            <Text variant="body" textAlign="right">
              {kasir}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
