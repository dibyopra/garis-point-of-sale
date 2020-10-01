import React from 'react';
import {Box, Text} from '@core/components';

export const Title = (): JSX.Element => {
  return (
    <Box justifyContent="center" alignItems="center" mb="l" >
      <Text variant={{phone:"hero",smallPhone:"header"}} paddingTop="m" textAlign="center" >
        Selamat Datang
      </Text>
      <Text variant="body" textAlign="center" >
        Use your credential below and login to your account
      </Text>
    </Box>
  );
};
