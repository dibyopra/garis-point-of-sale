import React from 'react';
import {Box, StyleSheet, useTheme, Text} from '@core/components';
import {scaleLinear} from 'd3';
import {formatK} from '@core/helpers';

interface UnderlayProps {
  maxY: number;
  canvasWidth: number;
}

export const MARGIN = 'xl';
const ROW_HEIGHT = 0.1;

export const Underlay = (props: UnderlayProps): JSX.Element => {
  const {maxY, canvasWidth} = props;
  const {spacing} = useTheme();
  const scaleFormater = scaleLinear().domain([0, ROW_HEIGHT]).range([0, maxY]);
  return (
    <Box {...StyleSheet.absoluteFillObject}>
      <Box flex={1} justifyContent="space-between" marginBottom={MARGIN}>
        {[1, 0.75, 0.5, 0.25, 0].map((t) => {
          const value = Math.round(scaleFormater(t * ROW_HEIGHT));
          return (
            <Box
              key={t}
              flexDirection="row"
              alignItems="center"
              height={ROW_HEIGHT}
              top={t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0}>
              <Box width={spacing[MARGIN]} paddingRight="xs">
                <Text textAlign="right" variant="body" fontSize={12} >
                  {formatK(value)}
                </Text>
              </Box>
              <Box
                width={canvasWidth - spacing[MARGIN]}
                height={1}
                opacity={0.2}
                backgroundColor="secondary"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
