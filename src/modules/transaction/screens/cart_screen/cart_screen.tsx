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
import {useProductConsumer} from '@core/context';
import {formatRp} from '@core/helpers';

export const CartScreen = ({
  navigation,
}: CartNavigationProps<'Cart'>): JSX.Element => {
  const {spacing} = useTheme();
  const {PADDING, BORDER_RADIUS} = useResponsive();
  const {product, productTotal} = useProductConsumer();
  const isProductEmpty = product.length === 0;
  const RenderHeader = () => {
    return (
      <Box>
        <Header
          subtitle={`${product.length} Item ditambahkan`}
          title="Keranjang"
          back
        />
      </Box>
    );
  };

  return (
    <AppLayout defaultPadding={false} header={<RenderHeader />}>
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
        paddingHorizontal={BORDER_RADIUS}
        paddingVertical={PADDING}
        flexDirection="row"
        backgroundColor="secondary"
        borderTopLeftRadius={BORDER_RADIUS}>
        <Box flex={1} justifyContent="center">
          <Text variant="info" color="grey">
            Sub total
          </Text>
          <Text variant="title" color="white">
            {formatRp(productTotal)}
          </Text>
        </Box>
        <Button
          enabled={!isProductEmpty}
          onPress={() => navigation.push('Checkout')}
          width={150}
          variant="primary"
          label="Check out"
        />
      </Box>
    </AppLayout>
  );
};
