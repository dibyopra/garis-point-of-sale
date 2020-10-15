import React from 'react';
import {Card} from './card';
import {Box, Text, TextInput, Dimensions} from '@core/components';
import {formatRp} from '@core/helpers';

const {width} = Dimensions.get('window');

interface DetailPesananProps {}

export const DetailPesanan = (): JSX.Element => {
  return (
    <Card title="Detail pesanan">
      <Detail title="Sub total" value={150000} />
      <Detail title="Diskon" value={150000} />
      <Box flexDirection="row" justifyContent="flex-end" alignItems="flex-end">
        <TextInput
          iconRight={{iconName: 'paperclip', onPress: () => true}}
          label="Bayar"
          style={{width: width / 2}}
        />
      </Box>
      <Detail title="total" value={150000} />
    </Card>
  );
};

const Detail = ({
  title,
  value,
}: {
  title: string;
  value: number;
}): JSX.Element => {
  return (
    <Box marginTop="s" flexDirection="row" justifyContent="space-between">
      <Text variant="body">{title}</Text>
      <Text variant="button" color="secondary">
        {formatRp(value)}
      </Text>
    </Box>
  );
};
