import React, {forwardRef} from 'react';
import {useTheme} from '@shopify/restyle';
import {
  OutlinedTextField,
  TextFieldProps,
} from 'react-native-material-textfield';

import {Box, Theme} from '../themes';
import {StyleProp, ViewStyle} from 'react-native';
import {RoundedIconButton} from '../button';

interface Props extends TextFieldProps {
  error?: string;
  touched?: boolean;
  label: string;
  style?: StyleProp<ViewStyle>;
  iconRight?: {iconName: string; onPress: () => void};
}

const CustomTextInput = forwardRef(
  (
    props: Props,
    ref:
      | ((instance: OutlinedTextField | null) => void)
      | React.RefObject<OutlinedTextField>
      | null,
  ): JSX.Element => {
    const {error, touched = false, label, iconRight, style, ...other} = props;
    const {colors} = useTheme<Theme>();
    return (
      <Box
        marginTop="m"
        style={[{marginBottom: -8}, style]}
        justifyContent="center">
        {iconRight && (
          <Box position="absolute" right={10} bottom={20} zIndex={99}>
            <RoundedIconButton
              size={30}
              iconName={iconRight.iconName}
              onPress={iconRight.onPress}
              iconColor="text"
            />
          </Box>
        )}
        <OutlinedTextField
          style={{
            fontFamily: 'SFUIDisplay-Medium',
            color: colors.mainForeground,
          }}
          error={touched ? error : undefined}
          errorColor={touched ? colors.danger : colors.transparent}
          baseColor={colors.text}
          tintColor={colors.primary}
          autoCapitalize="none"
          {...{ref, label}}
          {...other}
        />
      </Box>
    );
  },
);
export default CustomTextInput;
