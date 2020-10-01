import React from 'react';
import {Box, theme} from '../themes';
import {StyleSheet, Dimensions} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import {DrawerItem} from './drawer_item';

const {width} = Dimensions.get('window');

export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio * 0.61;

export const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
): JSX.Element => {
  const {borderRadii} = theme;
  const {state, navigation, descriptors} = props;
  const {index, routes} = state;

  const borderSize = borderRadii.xl;
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box {...{height}}>
        <Box
          {...StyleSheet.absoluteFillObject}
          backgroundColor="secondary"
          borderBottomRightRadius={{phone: 'xl', smallPhone: 'l'}}
        />
      </Box>
      <Box flex={1} backgroundColor="secondary">
        <Box
          {...StyleSheet.absoluteFillObject}
          backgroundColor="mainBackground"
          borderTopLeftRadius={{phone:"xl",smallPhone:"l"}}
          borderBottomRightRadius={{phone:"xl",smallPhone:"l"}}
          padding={{phone:"xl",smallPhone:"l"}}
          paddingVertical={{phone: 'xl', smallPhone: 'l'}}>
          <Box
            position="absolute"
            top={-borderSize}
            backgroundColor="primary"
            alignSelf="center"
            style={{
              height: borderSize * 2,
              width: borderSize * 2,
              borderRadius: borderSize,
            }}
          />
          {routes.map(({name, key}, i) => {
            // const icon = ["home",]
            const label = descriptors[key].options.title;
            return (
              <DrawerItem
                key={i}
                // icon={icon[i]}
                active={index === i}
                label={label || name}
                onPress={() => navigation.navigate(name)}
              />
            );
          })}
        </Box>
      </Box>
      {/* footer */}
      <Box width={DRAWER_WIDTH} height={height * 0.61}>
        <Box
          {...StyleSheet.absoluteFillObject}
          backgroundColor="secondary"
          borderTopLeftRadius={{phone:"xl",smallPhone:"l"}}
        />
      </Box>
    </Box>
  );
};
