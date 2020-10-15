import React from 'react';
import {
  Box,
  Dimensions,
  RoundedIconButton,
  BUTTON_HEIGHT,
  Text,
  RectButton,
  useTheme,
  Icon,
} from '@core/components';
import {useResponsive} from '@core/hooks';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {TransactionRoutes} from '@core/interfaces';
import {useNavigation} from '@react-navigation/native';
import {useProductConsumer} from '@core/context';
import {formatRp} from '@core/helpers';

const {width} = Dimensions.get('window');

interface FooterProps {
  onPress: () => void;
}

export const Footer = ({}: FooterProps): JSX.Element => {
  const {BORDER_RADIUS, PADDING} = useResponsive();
  const {colors} = useTheme();
  const {product, productTotal} = useProductConsumer();
  const emptyProduct = product.length === 0;
  const navigation = useNavigation<
    DrawerNavigationProp<TransactionRoutes, 'Product'>
  >();
  return (
    <Box
      borderTopLeftRadius={BORDER_RADIUS}
      backgroundColor="secondary"
      padding={PADDING}
      flexDirection="row"
      justifyContent="center"
      alignItems="center">
      <RectButton
        enabled={emptyProduct ? false : true}
        onPress={() => navigation.navigate('Cart')}
        style={{
          backgroundColor: colors.primary,
          width: width / 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: BUTTON_HEIGHT / 2,
          height: BUTTON_HEIGHT,
        }}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box flex={1} alignItems="center">
            <Text variant="button" color="white">
              {emptyProduct
                ? 'Keranjang Kosong'
                : `${product.length} item | ${formatRp(productTotal)}`}
            </Text>
          </Box>
          {!emptyProduct && (
            <Icon name="chevron-right" size={30} color={colors.white} />
          )}
        </Box>
      </RectButton>
      <Box marginLeft="m">
        <RoundedIconButton
          onPress={() => console.log('asu')}
          size={BUTTON_HEIGHT}
          iconName="plus"
          iconColor="white"
          backgroundColor="primary"
        />
      </Box>
    </Box>
  );
};
