import React, {useEffect, useRef, useCallback} from 'react';
import {Animated} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Text, Theme} from '../themes';
import {useTheme} from '@shopify/restyle';

export const InternetConnection = (): JSX.Element => {
  const {colors} = useTheme<Theme>();
  const animation = useRef(new Animated.Value(-30)).current;

  const show = useCallback(
    (isConnected: boolean): void => {
      Animated.timing(animation, {
        toValue: isConnected ? -30 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    },
    [animation],
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      show(state.isConnected && state.isInternetReachable !== false);
    });
    return () => {
      unsubscribe();
    };
  }, [show]);

  return (
    <Animated.View
      style={{
        backgroundColor: colors.danger,
        height: 30,
        position: 'absolute',
        bottom: animation,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text variant="body" textAlign="center" color="white" style={{margin:10}} >
        Tidak ada koneksi internet
      </Text>
    </Animated.View>
  );
};
