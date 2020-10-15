import React from 'react';
import {Box, Text, theme} from '../themes';
import {TouchableWithoutFeedback} from 'react-native';

interface RadioButtonProps {
  color?: keyof typeof theme.colors;
  uncheckedColor?: keyof typeof theme.colors;
  value: string;
  checked: boolean;
  onPress: () => void;
}

const radioSize = 20;

export const RadioButton = (props: RadioButtonProps): JSX.Element => {
  const {
    color = 'secondary',
    uncheckedColor = 'text',
    checked,
    value,
    onPress,
  } = props;
  const backgroundColor = checked ? color : uncheckedColor;
  return (
    <TouchableWithoutFeedback {...{onPress}}>
      <Box flexDirection="row" alignItems="center">
        <Box
          height={radioSize}
          width={radioSize}
          borderRadius="xl"
          justifyContent="center"
          alignItems="center"
          borderWidth={2}
          borderColor={backgroundColor}>
          {checked && (
            <Box
              width={radioSize * 0.69}
              height={radioSize * 0.69}
              borderRadius="xl"
              backgroundColor={backgroundColor}
            />
          )}
        </Box>
        <Text style={{marginTop:2}} variant="button" marginLeft="s" color={backgroundColor}>
          {value}
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};
