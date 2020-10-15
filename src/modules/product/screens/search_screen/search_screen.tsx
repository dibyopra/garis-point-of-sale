import React, {useRef} from 'react';
import {
  AppLayout,
  RNTextInput,
  useTheme,
  Box,
  Text,
  Dimensions,
  RectButton,
  OutlinedTextField,
  ScrollView,
} from '@core/components';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from './components';
import {useResponsive} from '@core/hooks';

const {width} = Dimensions.get('window');
const riwayat = ['Helm ink classic', 'Sepatu futsal', 'JZ sliming tea'];
const category = [
  'Liquid freebase',
  'Slat Nic',
  'Coil dan Catridge',
  'POD',
  'Kapas',
  'Battery',
];

interface SearchScreenProps {}

export const SearchScreen = (): JSX.Element => {
  const {colors, spacing, borderRadii} = useTheme();
  const {PADDING} = useResponsive();
  return (
    <AppLayout
      backgroundColor="grey"
      defaultPadding={false}
      header={
        <Header>
          <RNTextInput
            autoFocus={true}
            placeholder="Cari"
            placeholderTextColor={colors.text}
            style={{
              color:colors.secondary,
              width: '100%',
              borderRadius: borderRadii.xs,
              backgroundColor: colors.primaryLight,
              height: 40,
              padding: 0,
              paddingHorizontal: spacing.s,
            }}
          />
          <Box position="absolute" right={20}>
            <RectButton
              onPress={() => true}
              style={{
                height: 35,
                width: 35,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                size={35 * 0.6}
                name="qr-code-outline"
                color={colors.secondary}
              />
            </RectButton>
          </Box>
        </Header>
      }>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* history */}
        <Box backgroundColor="mainBackground" marginBottom="s" elevation={2}>
          {riwayat.map((text, i) => {
            return (
              <RectButton onPress={() => true} key={i}>
                <Box
                  paddingHorizontal={PADDING}
                  borderBottomWidth={1}
                  borderColor="grey"
                  style={{paddingVertical: 10}}>
                  <Text variant="body" color="secondary">
                    {text}
                  </Text>
                </Box>
              </RectButton>
            );
          })}
          <RectButton onPress={() => true} >
          <Box
            alignItems="center"
            paddingHorizontal={PADDING}
            style={{paddingVertical: 10}}>
            <Text variant="body">Hapus riwayat pencarian</Text>
          </Box>
          </RectButton>
        </Box>

        {/* category */}
        <Box backgroundColor="mainBackground" marginBottom="s" elevation={2}>
          <Box paddingHorizontal={PADDING} paddingVertical="s">
            <Text variant="title">Kategori</Text>
          </Box>
          <Box flexWrap="wrap" flexDirection="row">
            {category.map((text, i) => {
              return (
                <RectButton key={i} onPress={() => true}>
                  <Box
                    height={75}
                    width={width / 2}
                    flexDirection="row"
                    borderTopWidth={1}
                    borderRightWidth={i % 2 === 0 ? 1 : 0}
                    paddingLeft={PADDING}
                    paddingRight="s"
                    borderColor="grey"
                    justifyContent="center"
                    alignItems="center">
                    <Box flex={1} marginRight="s">
                      <Text numberOfLines={2} variant="body" color="secondary">
                        {text}
                      </Text>
                    </Box>
                    <Box width={50}>
                      <Box
                        height={50}
                        width={50}
                        borderRadius="xl"
                        backgroundColor="primaryLight"
                      />
                    </Box>
                  </Box>
                </RectButton>
              );
            })}
          </Box>
        </Box>
      </ScrollView>
    </AppLayout>
  );
};
