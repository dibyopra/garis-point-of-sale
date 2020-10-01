import React from 'react';
import {Box, Text, Icon, useTheme, RectButton} from '@core/components';
import {formatK} from '@core/helpers';

interface InfoProps {}

export const Info = (): JSX.Element => {
  const {colors, spacing} = useTheme();
  return (
    <Box
      marginVertical="m"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end">
      <Box>
        <Text variant="body">240 tranksaksi</Text>
        <Text variant="header">{formatK(6156000)}</Text>
      </Box>
      <RectButton
      onPress={() => true}
        style={{
          backgroundColor: colors.primaryLight,
          borderRadius: spacing.m,
          padding: spacing.s,
        }}>
        <Box flexDirection="row">
          <Text variant="button" color="primary" marginRight="xs">
            Hari ini
          </Text>
          <Icon name="chevron-down" color={colors.primary} size={16} />
        </Box>
      </RectButton>
    </Box>
  );
};
