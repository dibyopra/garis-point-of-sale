import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {IconProps} from 'react-native-vector-icons/Icon';
import {Box, useTheme, theme} from '../themes';

export interface RoundedIconProps extends Readonly<IconProps> {
  backgroundColor?: keyof typeof theme.colors;
  color?: keyof typeof theme.colors;
  iconRatio?: number;
}

export const RoundedIcon = (props: RoundedIconProps): JSX.Element => {
  const {
    size = 40,
    color = 'secondary',
    backgroundColor,
    iconRatio = 0.6,
    ...other
  } = props;
  const {colors} = useTheme();
  const ICON_SIZE = size * iconRatio;
  return (
    <Box
      backgroundColor={backgroundColor}
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{borderRadius: size/2}}>
      <Icon size={ICON_SIZE} {...other} color={colors[color]} />
    </Box>
  );
};
