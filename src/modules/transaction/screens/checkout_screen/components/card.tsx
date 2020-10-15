import React from 'react';
import {useResponsive} from '@core/hooks';
import {Box, Text} from '@core/components';

interface CardProps {
  children: React.ReactNode;
  title: string;
}

export const Card = ({children, title}: CardProps): JSX.Element => {
  const {PADDING} = useResponsive();
  return (
    <Box
      paddingHorizontal={PADDING}
      paddingVertical="m"
      backgroundColor="mainBackground"
      marginBottom="s"
      elevation={2}>
      <Text variant="button">{title}</Text>
      {children}
    </Box>
  );
};
