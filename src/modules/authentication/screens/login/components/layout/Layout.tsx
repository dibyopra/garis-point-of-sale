import React, {Fragment} from 'react';
import {
  Dimensions,
  StyleProp,
  ViewStyle,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {BoxProps} from '@shopify/restyle';
import {theme, Box, InternetConnection, Theme} from '@core/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import FastImage from 'react-native-fast-image';
import Patterns from '@assets/images/image';

const aspectRatio = 294 / 398;
const {width, height: SHeight} = Dimensions.get('window');
const height = width * aspectRatio;
const headerHeight = height * 0.41;

type Props = BoxProps<Theme> & {
  headerVariant?: 'pattern' | 'primary' | 'secondary';
  children: React.ReactNode;
  footer?: React.ReactNode;
  safeArea?: boolean;
  style?: StyleProp<ViewStyle>;
  showInternetConnection?: boolean;
};

export const Layout = (props: Props): JSX.Element => {
  const {
    children,
    headerVariant = 'pattern',
    footer,
    safeArea = true,
    style,
    showInternetConnection = false,
    ...other
  } = props;
  const {borderRadii} = theme;
  const Container = safeArea ? SafeAreaView : Fragment;
  return (
    <KeyboardAwareScrollView>
      <Container style={{flex: 1}}>
        <Box
          backgroundColor="secondary"
          height={SHeight}
          {...{width}}
          style={style}
          {...other}>
          <Box backgroundColor="mainBackground">
            <Box
              backgroundColor={headerVariant === "pattern" ? undefined : headerVariant}
              borderBottomLeftRadius={{smallPhone:"l",phone:"xl"}}
              overflow="hidden"
              height={headerHeight}>
              {headerVariant === 'pattern' && (
                <FastImage
                  source={Patterns.Pattern_1}
                  style={{
                    height,
                    width,
                    borderBottomLeftRadius: borderRadii.xl,
                  }}
                />
              )}
            </Box>
          </Box>
          <Box flex={1} overflow="hidden" backgroundColor={headerVariant === "pattern" ? undefined : headerVariant}>
            {headerVariant === 'pattern' && (
              <FastImage
                source={Patterns.Pattern_1}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  height,
                  width,
                  top: -headerHeight,
                }}
              />
            )}
            <Box
              flex={1}
              borderRadius={{smallPhone:"l",phone:"xl"}}
              style={{borderTopLeftRadius: 0}}
              backgroundColor="mainBackground">
              {/* <KeyboardAwareScrollView style={{flexGrow: 1}} scrollEnabled={false}> */}
              {children}
              {/* </KeyboardAwareScrollView> */}
            </Box>
          </Box>
          <Box padding="m">
            {footer}
          </Box>
          {showInternetConnection && <InternetConnection />}
        </Box>
      </Container>
    </KeyboardAwareScrollView>
  );
};
