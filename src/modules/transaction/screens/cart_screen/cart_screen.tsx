import React from 'react';
import {
  AppLayout,
  Header,
  Box,
  Text,
  ScrollView,
  useTheme,
  Button,
} from '@core/components';
import {CartNavigationProps} from '@core/interfaces';
import {useResponsive} from '@core/hooks';
import {CartItem} from './components';
import { useProductConsumer } from '@core/context';
import { formatRp } from '@core/helpers';

const data: CartItemInterface[] = [
  {
    code: 'KLAO1',
    name: '13 MM',
    price: 5000,
    qty: 7,
    total: 50000,
  },
  {
    code: 'FAAD4',
    name: 'adapter aegist legend 200w',
    price: 65000,
    qty: 2,
    total: 50000,
  },
  {
    code: 'FAAD2',
    name: 'adapter aegist boost',
    price: 65000,
    qty: 3,
    total: 50000,
  },
  {
    code: 'KLAO2',
    name: '20 MM',
    price: 5000,
    qty: 7,
    total: 50000,
  },
];

export const CartScreen = ({}: CartNavigationProps<'Cart'>): JSX.Element => {
  const {spacing} = useTheme();
  const {PADDING, BORDER_RADIUS} = useResponsive();
  const {product,productTotal} = useProductConsumer()
  const RenderHeader = () => {
    return (
      <Box backgroundColor="primary" borderBottomRightRadius="xl" >
        <Header variant="primary" bordered={false} title="Keranjang" back />
        <Box justifyContent="center" alignItems="center" padding="s">
          <Text variant="title" color="white">
            6 Item ditambahkan
          </Text>
        </Box>
      </Box>
    );
  };

  return (
    <AppLayout defaultPadding={false} variant="style" header={<RenderHeader />}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: spacing[PADDING],
          paddingTop: spacing.m,
        }}>
        {product.map((item) => {
          return <CartItem {...{item}} key={item.code} />;
        })}
      </ScrollView>
      <Box
      padding={PADDING}
      flexDirection="row"
        backgroundColor="secondary"
        borderTopLeftRadius={BORDER_RADIUS}>
        <Box flex={1} justifyContent="center" >
          <Text variant="info" color='grey' >Sub total</Text>
          <Text variant="title" color="white" >{formatRp(productTotal)}</Text>
        </Box>
        <Button onPress={() => true} width={150} variant="primary" label="Check out" />
      </Box>
    </AppLayout>
  );
};
