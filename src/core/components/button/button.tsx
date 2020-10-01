import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {StyleProp, ViewStyle} from 'react-native';

import {Box, Text, theme, useTheme} from '../themes';

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
  const {borderRadii, spacing, colors} = useTheme();
  return (
    // <Box
    //   borderWidth={variant === 'default' ? 1 : 0}
    //   backgroundColor={backgroundColor}
    //   borderRadius="xs"
    //   style={[{padding: 0.5}]}>
      <RectButton
        enabled={enabled}
        rippleColor="rgba(12,13,52,0.1)"
        {...{onPress}}
        style={[{
          backgroundColor: colors[backgroundColor],
          height,
          width: width ? width : '100%',
          borderRadius: borderRadii.xs,
          padding: spacing.m,
          justifyContent:"center",
          flexDirection: 'row',
          alignItems: 'center',
        },style]}>
        {/* <Box
          width="100%"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent={icon ? undefined : 'center'}> */}
        {icon}
        {label && (
          <Text variant={textVariant} color={color} paddingLeft="xs">
            {label}
          </Text>
        )}
        {/* </Box> */}
      </RectButton>
    // </Box>
  );
};
