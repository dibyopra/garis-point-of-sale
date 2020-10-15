import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {theme, useTheme} from '../themes';
import {StyleProp, ViewStyle} from 'react-native';

interface RoundedIconButtonProps {
  size?: number;
  onPress: () => void;
  iconName: string;
  iconColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  aspectRation?: number;
  style?: StyleProp<ViewStyle>;
  enabled?:boolean;
}

export const RoundedIconButton = (
  props: RoundedIconButtonProps,
): JSX.Element => {
  const {
    size = 40,
    onPress,
    iconName,
    enabled=true,
    backgroundColor = "transparent",
    iconColor = 'secondary',
    aspectRation = 0.7,
    style,
  } = props;
  const {colors} = useTheme();
  const ICON_SIZE = size * aspectRation;
  return (
    <RectButton
      style={[
        {
          height: size,
          width: size,
          borderRadius: size / 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors[backgroundColor],
        },
        style,
      ]}
      rippleColor="rgba(12,13,52,0.1)"
      {...{onPress,enabled}}>
      <Icon color={theme.colors[iconColor]} name={iconName} size={ICON_SIZE} />
    </RectButton>
  );
};
