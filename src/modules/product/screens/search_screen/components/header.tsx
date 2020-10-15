import React from 'react';
import {Box, Text, theme, RoundedIconButton} from '@core/components';
import {Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {AppRoutes, ProductRoutes} from '@core/interfaces';
import { StackNavigationProp } from '@react-navigation/stack';

const {width} = Dimensions.get('window');

interface HeaderProps {
    children:React.ReactNode
}

export const Header = ({children}: HeaderProps): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<ProductRoutes, 'Search'>>();
  return (
    <Box
      height={50}
      flexDirection="row"
      paddingHorizontal="s"
      backgroundColor="mainBackground">
      <Box height={50} width={50} justifyContent="center" alignItems="center">
          <RoundedIconButton
            iconColor="secondary"
            iconName="chevron-left"
            onPress={() => navigation.goBack()}
            size={30}
          />
      </Box>
      <Box flex={1} justifyContent="center" alignItems="center" paddingRight="m" >
        {children}
      </Box>
    </Box>
  );
};
