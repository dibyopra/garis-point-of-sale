import React from 'react';
import {Box, RoundedIconButton, Text, Icon, useTheme} from '@core/components';
import {formatK} from '@core/helpers';

export interface dataCabang {
  id: string;
  tranksaksi: number;
  namaCabang: string;
  totalOmset: number;
  presentase_cabang: number;
  presentase_pusat: number;
  total_cabang: number;
  total_pusat: number;
  hpp: number;
  ws?: number;
  mrsp: number;
}

interface ItemCabangProps {
  data: dataCabang;
  onPress?: () => void;
}

export const ItemCabang = ({data, onPress}: ItemCabangProps): JSX.Element => {
  const {
    hpp,
    mrsp,
    namaCabang,
    presentase_cabang,
    presentase_pusat,
    totalOmset,
    total_cabang,
    total_pusat,
    tranksaksi,
    ws,
  } = data;
  const {colors} = useTheme();
  return (
    <Box
      marginBottom="l"
      marginHorizontal="xs"
      paddingHorizontal="m"
      paddingVertical="s"
      borderRadius="xs"
      backgroundColor="mainBackground"
      elevation={2}>
      <Box
        flexDirection="row"
        paddingVertical="s"
        borderBottomWidth={1}
        borderColor="grey"
        borderStyle="dashed"
        justifyContent="space-between"
        alignItems="flex-end">
        <Box>
          <Box flexDirection="row" alignItems="center">
            <Icon
              name="map-pin"
              size={14}
              color={colors.primary}
              style={{marginBottom: 5}}
            />
            <Text variant="subHeader" paddingLeft="xs" color="primary">
              {namaCabang}
            </Text>
          </Box>
          <Text variant="body">{tranksaksi} tranksaksi</Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Box>
            <Text variant="subHeader" color="primary" paddingTop="xs">
              {formatK(totalOmset)}
            </Text>
          </Box>
          {onPress && (
            <Box paddingLeft="s">
              <RoundedIconButton iconName="chevron-right" {...{onPress}} />
            </Box>
          )}
        </Box>
      </Box>

      <Box
        paddingVertical="m"
        flexDirection="row"
        borderColor="grey"
        justifyContent="space-between"
        alignItems="flex-end"
        marginTop="s">
        <Box>
          <Text variant="body">
            Pusat{' '}
            <Text variant="body" color="primary">
              {presentase_pusat}%
            </Text>
          </Text>
          <Text variant="title">{formatK(total_pusat)}</Text>
        </Box>
        <Box>
          <Text variant="body">
            Cabang{' '}
            <Text variant="body" color="primary">
              {presentase_cabang}%
            </Text>
          </Text>
          <Text variant="title" textAlign="right">
            {formatK(total_cabang)}
          </Text>
        </Box>
      </Box>

      <Box
        paddingVertical="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        marginTop="s">
        <Box>
          <Text variant="body">HPP</Text>
          <Text variant="title">{formatK(hpp)}</Text>
        </Box>
        {ws && (
          <Box>
          <Text variant="body" textAlign="center">
            WS
          </Text>
          <Text variant="title" textAlign="center">
            {formatK(ws)}
          </Text>
        </Box>
        )}
        <Box>
          <Text variant="body" textAlign="right">
            MRSP
          </Text>
          <Text variant="title" textAlign="right">
            {formatK(mrsp)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
