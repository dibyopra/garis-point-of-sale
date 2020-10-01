import React, {useState} from 'react';
import {
  AppLayout,
  Header,
  Box,
  Dimensions,
  useTheme,
  ScrollView,
} from '@core/components';
import {ProductNavigationProps, productItemInterface} from '@core/interfaces';
import {ProductItem, Footer} from './components';
import {useResponsive} from '@core/hooks';

const {width: wWidth} = Dimensions.get('window');

const data: productItemInterface[] = [
  {
    id: '1',
    code: 'KLAO1',
    name: '13 MM',
    price: 5000,
    stock: 1,
    uom: 'Pcs',
  },
  {
    id: '4',
    code: 'FAAD4',
    name: 'adapter aegist legend 200w',
    price: 65000,
    stock: 2,
    uom: 'Pcs',
  },
  {
    id: '3',
    code: 'FAAD2',
    name: 'adapter aegist boost',
    price: 65000,
    stock: 0,
    uom: 'Pcs',
  },
  {
    id: '2',
    code: 'KLAO2',
    name: '20 MM',
    price: 5000,
    stock: 7,
    uom: 'Pcs',
  },
  {
    id: '8',
    code: 'FAAD3',
    name: 'adapter rpm boost',
    price: 55000,
    stock: 2,
    uom: 'Pcs',
  },
  {
    id: '5',
    code: 'FAAD5',
    name: 'ala carte hitam salt',
    price: 65000,
    stock: 0,
    uom: 'Pcs',
  },
  {
    id: '6',
    code: 'FAAD6',
    name: 'alacarte hitam',
    price: 65000,
    stock: 2,
    uom: 'Pcs',
  },
];

export const ProductScreen = ({}: ProductNavigationProps<
  'Product'
>): JSX.Element => {
  const {spacing} = useTheme();
  const {PADDING} = useResponsive();

  const [footerHeight, setFooterHeight] = useState(0);
  const cardWidth = (wWidth - spacing[PADDING] * 3) / 2;

  return (
    <AppLayout
      defaultPadding={false}
      showInternetConnection
      header={
        <Header
          title="Produk"
          drawer
          iconRight={{name: 'search', onPress: () => true}}
        />
      }>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: footerHeight,
          paddingTop: spacing.m,
        }}>
        <Box flexDirection="row" paddingHorizontal={PADDING}>
          <Box>
            {data
              .filter((_, i) => i % 2 === 0)
              .map((product) => (
                <ProductItem key={product.id} {...{product, cardWidth}} />
              ))}
          </Box>
          <Box width={spacing[PADDING]} />
          <Box>
            {data
              .filter((_, i) => i % 2 !== 0)
              .map((product) => (
                <ProductItem key={product.id} {...{product, cardWidth}} />
              ))}
          </Box>
        </Box>
      </ScrollView>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        onLayout={({
          nativeEvent: {
            layout: {height},
          },
        }) => setFooterHeight(height)}>
        <Footer onPress={() => true} />
      </Box>
    </AppLayout>
  );
};
