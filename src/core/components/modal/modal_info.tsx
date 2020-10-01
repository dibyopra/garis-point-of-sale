import React from 'react';
import {Modal} from './modal';
import {Box, Text, theme, useTheme} from '../themes';
import Icon from 'react-native-vector-icons/Feather';
import {Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';

const {width} = Dimensions.get('window');

const modalWidth = width * 0.7;

interface ModalInfoProps {
  modalSize?: number;
  icon?: {
    iconColor?: keyof typeof theme.colors;
    iconName: string;
    iconSize?: number;
  };
  title: string;
  cancelLabel?: string;
  submitLabel?: string;
  submitColor?:keyof typeof theme.colors;
  show: boolean;
  loading?: boolean;
  onDismiss: () => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export const ModalInfo = (props: ModalInfoProps): JSX.Element => {
  const {
    onCancel,
    onDismiss,
    onSubmit,
    loading,
    show,
    modalSize = modalWidth,
    cancelLabel = 'Batal',
    icon,
    submitLabel = 'Selesai',
    submitColor="warning",
    title,
  } = props;
  const {colors} = useTheme();
  return (
    <Modal {...{show, onDismiss}}>
      <Box width={modalSize}>
        <Box flex={1} padding="m" justifyContent="center" alignItems="center">
          {loading ? (
            <ActivityIndicator size={72} color={colors.primary} />
          ) : (
            icon && (
              <Icon
                name={icon.iconName}
                size={icon.iconSize || 70}
                color={colors[icon.iconColor || 'primary']}
              />
            )
          )}
          <Box marginTop="m">
            <Text variant="title" color="text" textAlign="center">
              {title}
            </Text>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          height={50}
          width="100%"
          borderTopWidth={1}
          borderColor="grey">
          <TouchableOpacity
            onPress={onCancel}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
            }}>
            <Box>
              <Text variant="button">{cancelLabel || 'Batal'}</Text>
            </Box>
          </TouchableOpacity>
          <Box height="100%" width={1} backgroundColor="grey" />
          <TouchableOpacity
            onPress={onSubmit}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
            }}>
            <Box>
              <Text variant="button" color={submitColor}>
                {submitLabel || 'Selesai'}
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </Modal>
  );
};
