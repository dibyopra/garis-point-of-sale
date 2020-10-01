import React from 'react';
import {Box, Dimensions, useTheme, Text} from '@core/components';
import {lerp} from '@dashboard/helpers';
import {formatK} from '@core/helpers';
import {Underlay, MARGIN} from './underlay';
import {ScrollView} from 'react-native';

const {width: wWidth} = Dimensions.get('window');
const aspectRatio = 195 / 305;

export interface DataPoint {
  value: number;
  title: string;
}

interface GraphProps {
  data: DataPoint[];
}

export const Graph = ({data}: GraphProps): JSX.Element => {
  const {spacing} = useTheme();
  const canvasWidth = wWidth - spacing.l * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const height = canvasHeight - spacing[MARGIN];
  const step = 75;
  const values = data.map((p) => p.value);
  const titles = data.map((p) => p.title);
  const maxY = Math.max(...values);
  return (
    <Box paddingLeft="xl" marginTop="l" >
      <Underlay {...{maxY, canvasWidth}} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <Box height={canvasHeight} >
          <Box height={height} flexDirection="row" alignItems="flex-end">
            {data.map((point) => {
              if (point.value === 0) {
                return null;
              }
              return (
                <Box
                  key={point.title}
                  width={step}
                  height={lerp(0, height, point.value / maxY)}>
                  <Box
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={spacing.m}
                    right={spacing.m}
                    backgroundColor="primaryLight"
                    borderTopRightRadius="m"
                    borderTopLeftRadius="m"
                  />
                  <Box
                    position="absolute"
                    top={0}
                    height={20}
                    borderRadius="l"
                    left={spacing.m}
                    right={spacing.m}
                    backgroundColor="primary"
                    justifyContent="center"
                    alignItems="center">
                    <Text
                      variant="body"
                      color="white"
                      fontSize={10}
                      textAlign="center">
                      {formatK(point.value)}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            height={spacing[MARGIN]}
            flexDirection="row"
            width={step}
            alignItems="center">
            {titles.map((title) => (
              <Box key={title} width={step}>
                <Text variant="body" textAlign="center">
                  {title.toUpperCase()}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
