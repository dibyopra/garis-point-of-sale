import React from 'react';
import {
  RectButton as RNRectButton,
  RectButtonProperties,
} from 'react-native-gesture-handler';
import {useTheme} from '../themes';

interface RectButtonProps extends RectButtonProperties {
  onPress: () => void;
  children: React.ReactNode;
}

export const RectButton = ({
  onPress,
  children,
  style,
  ...other
}: RectButtonProps): JSX.Element => {
  const {colors} = useTheme();
  return (
    <RNRectButton
      rippleColor={colors.ripple}
      {...other}
      {...{onPress}}
      style={[
        {
          borderRadius: 1,
        },
        style,
      ]}>
      {children}
    </RNRectButton>
  );
};
