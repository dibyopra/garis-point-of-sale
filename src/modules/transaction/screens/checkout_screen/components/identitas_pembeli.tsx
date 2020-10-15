import React from 'react';
import { Box, Text, RoundedIconButton } from '@core/components';
import { Card } from './card';

interface IdentitasPembeliProps {}

export const IdentitasPembeli = (): JSX.Element => {
  return (
    <Card title="Identitas pembeli">
      <Box flexDirection="row" alignItems="center">
        <Box flex={1}>
          <Text variant="body">Dibyo Prawiro (Pandaan)</Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Text variant="info">Pilih</Text>
          <RoundedIconButton onPress={() => true} iconName="chevron-right" />
        </Box>
      </Box>
    </Card>
  );
};
