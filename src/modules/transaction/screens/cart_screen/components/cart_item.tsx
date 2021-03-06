import React, {useState, useRef} from 'react';
import {
  Box,
  Text,
  useTheme,
  Dimensions,
  RoundedIconButton,
  Animated,
  ModalInfo,
} from '@core/components';
import {formatRp} from '@core/helpers';
import {useResponsive} from '@core/hooks';
import {productCartInterface} from '@core/interfaces';
import {useProductConsumer} from '@core/context';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width: wWidth} = Dimensions.get('window');

interface CartItemProps {
  item: productCartInterface;
}

export const CartItem = ({item}: CartItemProps): JSX.Element => {
  const {colors, spacing} = useTheme();
  const {PADDING} = useResponsive();
  const {increment, decrement, removeItem} = useProductConsumer();
  const width = wWidth - spacing[PADDING] * 2;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const {name, price, qty, id, stock, uom} = item;
  const [tempStock, setTempStock] = useState(stock - qty);

  const cardAnimationValue = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0)).current;

  const animatedButton = () => {
    Animated.timing(buttonScale, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const handleQty = () => {
    setOpen((c) => !c);
    Animated.timing(cardAnimationValue, {
      toValue: open ? 0 : -50,
      duration: 300,
      useNativeDriver: false,
    }).start(() => animatedButton());
  };

  const handleIncrement = (id: string) => {
    increment(id);
    if (tempStock > 0) {
      setTempStock((currentStock) => currentStock - 1);
    }
  };

  const handleDecrement = (id: string) => {
    decrement(id);
    setTempStock((currentStock) => currentStock + 1);
  };

  return (
    <Animated.View style={{flexDirection: 'row', left: cardAnimationValue}}>
      <ModalInfo
        icon={{iconName: 'alert-circle', iconColor: 'danger'}}
        submitColor="danger"
        submitLabel="Hapus"
        show={show}
        title={`Apakah anda yakin ingin menghapus "${name}" dari keranjang ?`}
        onDismiss={() => setShow(false)}
        onCancel={() => setShow(false)}
        onSubmit={() => removeItem(id)}
      />
      <Box width={width} flexDirection="row" marginBottom="m">
        <Box
          height={130}
          width={130}
          backgroundColor="primaryLight"
          borderRadius="xs"
        />
        <Box flex={1} padding="s">
          <Box flex={1}>
            <Text variant="button">{name.toUpperCase()}</Text>
            <Text variant="info" color={tempStock > 0 ? 'info' : 'danger'}>
              {tempStock > 0 ? `Tersisa ${tempStock} ${uom}` : 'Stok habis'}
            </Text>
          </Box>
          <Text variant="subTitle" color="primary">
            {formatRp(price)}
          </Text>
        </Box>
        <Box
          width={50}
          height={130}
          justifyContent="center"
          alignItems="center">
          <TouchableWithoutFeedback
            onLongPress={() => setShow(true)}
            onPress={() => handleQty()}
            style={{
              height: 35,
              width: 35,
              borderRadius: 35 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.secondary,
            }}>
            <Text color="white" variant="body">
              {qty}X
            </Text>
          </TouchableWithoutFeedback>
        </Box>
      </Box>
      {/* qty */}
      {open && (
        <Box width={50} justifyContent="center" alignItems="center">
          <Animated.View style={{transform: [{scale: buttonScale}]}}>
            <RoundedIconButton
              onPress={() => handleIncrement(id)}
              aspectRation={0.6}
              size={35}
              iconName="plus"
              backgroundColor="primary"
              iconColor="white"
            />
          </Animated.View>
          <Box height={10} />
          <Animated.View style={{transform: [{scale: buttonScale}]}}>
            <RoundedIconButton
              onPress={() => handleDecrement(id)}
              aspectRation={0.6}
              size={35}
              iconName="minus"
              backgroundColor="white"
              iconColor="secondary"
            />
          </Animated.View>
        </Box>
      )}
    </Animated.View>
  );
};
