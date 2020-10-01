import React, {useState} from 'react';
import {Box, Text, RectButton, useTheme, ModalInfo} from '@core/components';
import { formatK } from '@core/helpers';

export interface KasItemInteraface {
  id: string;
  kredit: number;
  debit: number;
  saldo: number;
  date?: string;
  value?: 'Sebelum' | 'Saldo Akhir';
  received?: boolean;
}

interface KasItemProps {
  item: KasItemInteraface;
}

export const KasItem = ({item}: KasItemProps): JSX.Element => {
  const {id, kredit, debit, saldo, date, value, received} = item;
  const {colors} = useTheme();
  const [show, setShow] = useState<boolean>(false);

  return (
    <Box
      flexDirection="row"
      paddingVertical="m"
      alignItems="flex-end"
      borderBottomWidth={1}
      borderColor={value ? "primary" : "grey"}>
      <ModalInfo
        {...{show}}
        icon={{iconName: 'alert-circle', iconColor: 'warning'}}
        title="Apakah anda yakin ingin menerima saldo ?"
        onDismiss={() => setShow(false)}
        onCancel={() => console.log('cancel')}
        onSubmit={() => console.log('submit')}
        submitLabel="Terima"
      />
      <RectButton
        rippleColor={colors.ripple}
        style={{borderRadius: 1}}
        enabled={received ? false : true}
        onPress={() => setShow(true)}>
        <Box width={value ? 90 : undefined}>
          {date && <Text variant="info">{date}</Text>}
          <Text
            variant={value ? 'button' : 'body'}
            color={value ? 'primary' : received ? 'sucess' : 'danger'}>
            {value || id}
          </Text>
        </Box>
      </RectButton>
      {debit > 0 && (
        <Box flex={1} marginHorizontal="m">
          <Text variant="info">Debit</Text>
          <Text variant="body">{formatK(debit)}</Text>
        </Box>
      )}
      {kredit > 0 && (
        <Box flex={1} marginHorizontal="m">
          <Text variant="info">Kredit</Text>
          <Text variant="body">{formatK(kredit)}</Text>
        </Box>
      )}
      <Box flex={1}>
        <Text variant="info">Saldo</Text>
        <Text variant="body">{formatK(saldo)}</Text>
      </Box>
    </Box>
  );
};
