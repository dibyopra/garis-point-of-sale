import React from 'react';
import {Box, RoundedIconButton, Text} from '@core/components';
import {formatK} from '@core/helpers';

export interface ItemCabangInterface {
  id: string;
  title: string;
  value: number;
}

interface ItemCabangProps {
  item: ItemCabangInterface;
  onPress: () => void;
}

export const ItemCabang = ({item, onPress}: ItemCabangProps): JSX.Element => {
  return (
    <Box
      paddingHorizontal="l"
      paddingVertical="s"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      borderColor={item.title == 'Pusat' ? 'primary' : 'grey'}
      borderBottomWidth={1}>
      <Text
        variant="body"
        color={item.title == 'Pusat' ? 'primary' : 'secondary'}>
        {item.title}
      </Text>
      <Box flexDirection="row" alignItems="center">
        <Text
          variant="body"
          color={item.title == 'Pusat' ? 'primary' : 'secondary'}
          paddingRight="s">
          {formatK(item.value)}
        </Text>
        <RoundedIconButton
          iconColor={item.title == 'Pusat' ? 'primary' : 'secondary'}
          style={{marginBottom: 3}}
          iconName="chevron-right"
          {...{onPress}}
        />
      </Box>
    </Box>
  );
};
