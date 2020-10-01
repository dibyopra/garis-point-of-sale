import React, {useEffect} from 'react';
import {Routes, theme} from '@core/components';
import {ThemeProvider} from '@shopify/restyle';
import {StatusBar} from 'react-native';
import {ProductProvider} from '@core/context';

export const App = () => {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </ThemeProvider>
  );
};
