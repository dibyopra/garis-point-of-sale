import React from 'react';
import {Box, useTheme, Text, RoundedIconButton} from '@core/components';
import {useResponsive} from '@core/hooks';
import {formatK} from '@core/helpers';
import {productItemInterface, productCartInterface} from '@core/interfaces';
import {useProductConsumer} from '@core/context';

interface ProductItemProps {
  product: productItemInterface;
  cardWidth: number;
}

export const ProductItem = ({
  cardWidth,
  product,
}: ProductItemProps): JSX.Element => {
  const {stock, price, name, code, uom} = product;
  const {PADDING} = useResponsive();
  const {spacing} = useTheme();
  const {addToProduct} = useProductConsumer();
  const imageSize = cardWidth - spacing.m * 2;

  const handleCart = (item: productItemInterface) => {
    // const {code, name, price, uom, id} = item;
    // let cart: productCartInterface = {
    //   id,
    //   uom,
    //   price,
    //   name,
    //   code,
    //   qty: 0,
    //   total: 0,
    // };
    if (item.stock > 0) {
      addToProduct(item)
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
        <Text variant="info" color={stock > 0 ? 'info' : 'danger'}>
          {stock > 0 ? `Tersisa ${stock} ${uom}` : 'Stok habis'}
        </Text>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        marginTop="s">
        <Text variant="body" color="primary">
          {formatK(price)}
        </Text>
        <RoundedIconButton
          backgroundColor="primary"
          iconColor="white"
          iconName="shopping-cart"
          aspectRation={0.4}
          onPress={() => handleCart(product)}
        />
      </Box>
    </Box>
  );
};
