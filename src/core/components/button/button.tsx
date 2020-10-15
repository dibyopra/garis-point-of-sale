import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {StyleProp, ViewStyle} from 'react-native';

import { Text, theme, useTheme} from '../themes';

interface ButtonProps {
  variant?: 'default' | 'primary' | 'transparent';
  bgColor?: keyof typeof theme.colors;
  textColor?: keyof typeof theme.colors;
  label: string;
  textVariant?: keyof typeof theme.textVariants;
  height?: number | string;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  enabled?: boolean;
  icon?: React.ReactNode;
}

export const BUTTON_HEIGHT = 45

export const Button = (props: ButtonProps) => {
  const {
    icon,
    enabled = true,
    label,
    onPress,
    style,
    height = BUTTON_HEIGHT,
    width,
    textVariant = 'button',
    variant = 'default',
    bgColor,
    textColor,
  } = props;
  const backgroundColor: keyof typeof theme.colors =
    variant == 'default'
      ? 'white'
      : variant === 'primary'
      ? bgColor || 'primary'
      : 'transparent';
  const color: keyof typeof theme.colors =
    variant == 'primary' ? textColor || 'white' : 'secondary';
  const {spacing, colors} = useTheme();
  return (
      <RectButton
        enabled={enabled}
        rippleColor="rgba(12,13,52,0.1)"
        {...{onPress}}
        style={[{
          backgroundColor: colors[backgroundColor],
          height,
          width: width ? width : '100%',
          borderRadius: BUTTON_HEIGHT/2,
          padding: spacing.m,
          justifyContent:"center",
          flexDirection: 'row',
          alignItems: 'center',
        },style]}>
        {icon}
        {label && (
          <Text variant={textVariant} color={color} paddingLeft="xs" style={{marginTop:2}} >
            {label}
          </Text>
        )}
      </RectButton>
  );
};
