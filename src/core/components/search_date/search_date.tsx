import React from 'react';
import { Box, Text, useTheme } from '../themes';
import { RectButton } from '../rect_button/rect_button';
import { RoundedIconButton } from '../button';

interface SearchDateProps {}

export const SearchDate = (): JSX.Element => {
    const {spacing} = useTheme()
  return (
    <Box paddingVertical="m">
      <Box
        backgroundColor="primaryLight"
        flexDirection="row"
        alignItems="center"
        borderRadius="xs">
        <RectButton
          onPress={() => console.log('tgl 1')}
          style={{flex: 1, padding: spacing.s}}>
          <Text variant="info">Mulai dari</Text>
          <Text variant="subTitle" color="text">
            09/10/2020
          </Text>
        </RectButton>
        <Box height="100%" width={2} backgroundColor="mainBackground" />
        <RectButton
          onPress={() => console.log('tgl 2')}
          style={{flex: 1, padding: spacing.s}}>
          <Text variant="info">Mulai dari</Text>
          <Text variant="subTitle" color="text">
            09/10/2020
          </Text>
        </RectButton>
        <Box paddingHorizontal="s">
          <RoundedIconButton
            backgroundColor="primary"
            iconColor="white"
            aspectRation={0.6}
            size={34}
            iconName="search"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Box>
  );
};
