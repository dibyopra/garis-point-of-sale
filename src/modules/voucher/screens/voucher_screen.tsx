import React from 'react';
import {
  AppLayout,
  Header,
  ScrollView,
  Box,
  Text,
  Icon,
  useTheme,
} from '@core/components';
import {VoucherNavigationProps, VoucherRoutes} from '@core/interfaces';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

const data: VoucherItemInterface[] = [
  {
    title: 'Ramadhan Sale',
    member: true,
    promoEnd: '6 hari lagi',
  },
  {
    title: 'Gratis Ongkir',
    member: false,
    promoEnd: '5 jam lagi',
  },
];

export const VoucherScreen = ({
  navigation,
}: VoucherNavigationProps<'Voucher'>): JSX.Element => {
  return (
    <AppLayout
      header={
        <Header
          title="Voucher Promo"
          drawer
        />
      }>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {data.map((item) => (
          <VoucherItem {...{item, navigation}} key={item.title} />
        ))}
      </ScrollView>
    </AppLayout>
  );
};

interface VoucherItemInterface {
  title: string;
  member: boolean;
  promoEnd: string;
}

interface VoucherItemProps {
  item: VoucherItemInterface;
  navigation: StackNavigationProp<VoucherRoutes, 'Voucher'>;
}

const VoucherItem = ({item, navigation}: VoucherItemProps): JSX.Element => {
  const {member, promoEnd, title} = item;
  const {colors} = useTheme();
  return (
    <Box borderBottomWidth={1} borderColor="grey" paddingVertical="m">
      <TouchableWithoutFeedback onPress={() => true}>
        <Box alignSelf="flex-end" alignItems="center" flexDirection="row">
          <Text variant="button" color="primary">
            Pakai
          </Text>
          <Icon name="chevron-right" color={colors.primary} size={16} />
        </Box>
      </TouchableWithoutFeedback>
      <Text variant="title">{title}</Text>
      {member && <Text variant="subTitle">Khusus member</Text>}
      <Text variant="body" color="danger" textAlign="right">
        Berakhir dalam : {promoEnd}
      </Text>
    </Box>
  );
};
