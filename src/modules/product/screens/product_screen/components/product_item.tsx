import React, {useState, useEffect} from 'react';
import {Box, useTheme, Text, RoundedIconButton} from '@core/components';
import {useResponsive} from '@core/hooks';
import {formatK} from '@core/helpers';
import {productItemInterface} from '@core/interfaces';
import {useProductConsumer} from '@core/context';
import {useIsFocused} from '@react-navigation/native';

interface ProductItemProps {
  product: productItemInterface;
  cardWidth: number;
}

export const ProductItem = ({
  cardWidth,
  product,
}: ProductItemProps): JSX.Element => {
  const {stock, price, name, code, uom, id} = product;
  const {PADDING} = useResponsive();
  const {spacing} = useTheme();
  const {addToProduct, getItem} = useProductConsumer();
  const imageSize = cardWidth - spacing.m * 2;
  const [tempStock, setTempStock] = useState(stock);

  const isFocus = useIsFocused();

  useEffect(() => {
    const cartItem = getItem(id);
    if (cartItem) {
      setTempStock(cartItem.stock - cartItem.qty);
    }else{
      setTempStock(stock)
    }
  }, [isFocus]);

  const handleCart = (item: productItemInterface) => {
    if (item.stock > 0) {
      addToProduct(item);
      if (tempStock > 0) {
        setTempStock((currentStock) => currentStock - 1);
      }
    } else {
      console.log('habis');
    }
  };

  return (
    <Box
      width={cardWidth}
      backgroundColor="mainBackground"
      elevation={2}
      borderRadius="xs"
      marginBottom={PADDING}
      padding="m">
      <Box
        height={imageSize}
        width={imageSize}
        backgroundColor="primaryLight"
      />
      <Box marginTop="s">
        <Text variant="button">{name.toUpperCase()}</Text>
        <Text variant="info">{code.toUpperCase()}</Text>
        <Text variant="info" color={tempStock > 0 ? 'info' : 'danger'}>
          {tempStock > 0 ? `Tersisa ${tempStock} ${uom}` : 'Stok habis'}
        </Text>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        marginTop="s">
        <Text variant="subTitle" color="primary">
          {formatK(price)}
        </Text>
        <RoundedIconButton
          enabled={tempStock > 0}
          backgroundColor={tempStock > 0 ? "primary" : "grey"}
          iconColor="white"
          iconName="shopping-cart"
          aspectRation={0.4}
          onPress={() => handleCart(product)}
        />
      </Box>
    </Box>
  );
};
