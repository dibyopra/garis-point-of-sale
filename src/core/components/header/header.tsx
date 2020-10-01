import React from 'react';
import {Box, Text, theme} from '@core/components';
import {Dimensions, StyleSheet} from 'react-native';
import {RoundedIconButton} from '../button';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {AppRoutes} from '@core/interfaces';

const {width} = Dimensions.get('window');

interface HeaderProps {
  variant?: 'default' | 'primary';
  title: string;
  subtitle?: string;
  iconLeft?: {
    name: string;
    onPress: () => void;
  };
  iconRight?: {
    name: string;
    onPress: () => void;
  };
  back?: boolean;
  bordered?: boolean;
  drawer?: boolean;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const {
    title,
    iconLeft,
    iconRight,
    variant = 'default',
    back,
    bordered = true,
    subtitle,
    drawer,
  } = props;
  const navigation = useNavigation<DrawerNavigationProp<AppRoutes, 'Home'>>();
  const backgroundColor: keyof typeof theme.colors =
    variant === 'default' ? 'transparent' : 'primary';
  const color: keyof typeof theme.colors =
    variant === 'default' ? 'secondary' : 'white';
  const defaultIconLeft = back
    ? 'chevron-left'
    : drawer
    ? 'menu'
    : iconLeft
    ? iconLeft.name
    : '';
  const iconLeftPress = back
    ? () => navigation.goBack()
    : drawer
    ? () => navigation.openDrawer()
    : iconLeft
    ? iconLeft.onPress
    : () => console.log('left icon pressed');
  return (
    <Box
      borderBottomWidth={bordered ? StyleSheet.hairlineWidth : 0}
      borderColor="grey"
      height={50}
      flexDirection="row"
      paddingHorizontal="s"
      {...{backgroundColor, width}}>
      <Box height={50} width={50} justifyContent="center" alignItems="center">
        {back || drawer || iconLeft ? (
          <RoundedIconButton
            iconColor={color}
            iconName={defaultIconLeft}
            onPress={iconLeftPress}
            size={30}
          />
        ) : null}
      </Box>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="title" {...{color}}>
          {title.toUpperCase()}
        </Text>
        {subtitle && <Text variant="body">{subtitle}</Text>}
      </Box>
      <Box height={50} width={50} justifyContent="center" alignItems="center">
        {iconRight && (
          <RoundedIconButton
            iconColor={color}
            iconName={iconRight.name}
            onPress={iconRight.onPress}
            size={30}
          />
        )}
      </Box>
    </Box>
  );
};
