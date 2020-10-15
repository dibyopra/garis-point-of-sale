import React from 'react';
import { Box, Text, RoundedIconButton } from '@core/components';
import { Card } from './card';

interface VoucherPromoProps {}

export const VoucherPromo = (): JSX.Element => {
  return (
    <Card title="Voucher promo">
      <Box flexDirection="row" alignItems="center">
        <Box flex={1}>
          <Text variant="body">Gratis ongkir</Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Text variant="info">Pilih</Text>
          <RoundedIconButton onPress={() => true} iconName="chevron-right" />
        </Box>
      </Box>
    </Card>
  );
};
