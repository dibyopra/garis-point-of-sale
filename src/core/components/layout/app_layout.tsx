import React, {Fragment} from 'react';
import {StyleProp, ViewStyle, StatusBar, StyleSheet} from 'react-native';
import {BoxProps} from '@shopify/restyle';
import {Box, InternetConnection, Theme} from '@core/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme, theme, Text} from '../themes';
import {Button} from '../button';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {useResponsive} from '@core/hooks';

type Props = BoxProps<Theme> & {
  children: React.ReactNode;
  variant?: 'default' | 'style';
  header?: React.ReactNode;
  safeArea?: boolean;
  style?: StyleProp<ViewStyle>;
  showInternetConnection?: boolean;
  statusBarStyle?: 'dark-content' | 'default' | 'light-content' | undefined;
  statusBarBg?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  error?: boolean;
  defaultPadding?:boolean;
  refresh?: () => Promise<void>;
};

export const AppLayout = (props: Props): JSX.Element => {
  const {
    variant = 'default',
    statusBarStyle = variant === 'default' ? 'dark-content' : 'light-content',
    statusBarBg = variant === 'default' ? 'mainBackground' : 'primary',
    backgroundColor = 'mainBackground',
    children,
    safeArea = true,
    style,
    defaultPadding=true,
    padding,
    header,
    refresh = () => true,
    error = false,
    showInternetConnection = false,
    ...other
  } = props;
  const {colors} = useTheme();
  const {BORDER_RADIUS, PADDING} = useResponsive();
  const Container = safeArea ? SafeAreaView : Fragment;

  const isOpen = useIsDrawerOpen();

  return (
    <Container style={{flex: 1}}>
      <StatusBar
        barStyle={isOpen ? 'light-content' : statusBarStyle}
        backgroundColor={isOpen ? colors.secondary : colors[statusBarBg]}
        animated
      />
      <Box
        backgroundColor={variant === 'default' ? backgroundColor : 'primary'}
        {...StyleSheet.absoluteFillObject}
      />
      {header}
      <Box
        flex={1}
        {...{backgroundColor}}
        paddingHorizontal={defaultPadding ? PADDING : padding}
        borderTopLeftRadius={BORDER_RADIUS}
        borderTopRightRadius={BORDER_RADIUS}
        {...other}>
        {!error ? (
          children
        ) : (
          <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="title">Data tidak dapat dimuat :(</Text>
            <Button label="Refresh" onPress={refresh} />
          </Box>
        )}
        {showInternetConnection && <InternetConnection />}
      </Box>
    </Container>
  );
};
