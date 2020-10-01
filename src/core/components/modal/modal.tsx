import React from 'react';
import {Modal as RNModal} from 'react-native';
import {Box} from '../themes';
import {TouchableWithoutFeedback} from 'react-native';

interface LoadingProps {
  show: boolean;
  onDismiss:() => void;
  children: React.ReactNode;
}

export const Modal = ({show, children,onDismiss}: LoadingProps): JSX.Element => {
  return (
    <RNModal animated animationType="fade" visible={show} transparent>
      <Box flex={1} justifyContent="center">
        <TouchableWithoutFeedback
          onPress={onDismiss}>
          <Box flex={1} backgroundColor="secondary" opacity={0.33} />
        </TouchableWithoutFeedback>
        <Box
          position="absolute"
          borderRadius="s"
          backgroundColor="white"
          alignSelf="center"
          justifyContent="center"
          alignItems="center">
          {children}
        </Box>
      </Box>
    </RNModal>
  );
};
