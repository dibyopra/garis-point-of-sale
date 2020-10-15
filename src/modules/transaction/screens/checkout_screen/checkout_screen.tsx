import React, {useState} from 'react';
import {
  AppLayout,
  Header,
  ScrollView,
  Box,
  Button,
  RadioButton,
} from '@core/components';
import {useResponsive} from '@core/hooks';
import {
  Card,
  IdentitasPembeli,
  VoucherPromo,
  DetailPesanan,
} from './components';

export const CheckoutScreen = (): JSX.Element => {
  const {PADDING, BORDER_RADIUS} = useResponsive();
  const [opsiPembayaran, setOpsiPembayaran] = useState<'tunai' | 'transfer'>(
    'tunai',
  );
  return (
    <AppLayout
      bg="grey"
      defaultPadding={false}
      header={<Header title="Pembayaran" back />}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <IdentitasPembeli />

        <VoucherPromo />

        <DetailPesanan />

        {/* opsi pembayaran */}
        <Card title="Opsi pembayaran">
          <Box
            marginTop="m"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center">
            <RadioButton
              onPress={() => setOpsiPembayaran('tunai')}
              checked={opsiPembayaran === 'tunai'}
              value="Tunai"
            />
            <RadioButton
              onPress={() => setOpsiPembayaran('transfer')}
              checked={opsiPembayaran === 'transfer'}
              value="Transfer"
            />
          </Box>
        </Card>
      </ScrollView>
      {/* footer */}
      <Box
        paddingHorizontal={BORDER_RADIUS}
        paddingVertical={PADDING}
        flexDirection="row"
        backgroundColor="secondary"
        borderTopLeftRadius={BORDER_RADIUS}>
        <Button onPress={() => true} variant="primary" label="Bayar" />
      </Box>
    </AppLayout>
  );
};
