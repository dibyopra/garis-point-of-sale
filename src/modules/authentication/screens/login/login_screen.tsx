import React, {useRef} from 'react';
import {
  Box,
  Text,
  Yup,
  useTheme,
  OutlinedTextField,
  useFormik,
  TextInput,
  Button,
} from '@core/components';

import {Layout, Title} from './components';
import {AuthNavigationProps} from '@core/interfaces';
import { CommonActions } from '@react-navigation/native';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
});

export const LoginScreen = ({navigation}: AuthNavigationProps<'Login'>) => {
  const {spacing} = useTheme();
  const password = useRef<OutlinedTextField>(null);

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {username: '', password: ''},
    onSubmit: () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      ),
  });
  return (
    <Layout
      showInternetConnection
      footer={
        <Box alignItems="center">
          <Text variant="body" fontSize={10} color="mainBackground">
            Powered by GARIS & GREAT CODE
          </Text>
        </Box>
      }>
      <Box flex={1} justifyContent="center" paddingHorizontal={{smallPhone:"l",phone:"xl"}}>
        <Title />
        <Box>
          {/* username */}
          <TextInput
            returnKeyType="next"
            returnKeyLabel="Selanjutnya"
            autoCompleteType="username"
            autoCapitalize="none"
            value={values.username}
            onChangeText={handleChange('username')}
            label="Username"
            error={errors.username}
            touched={touched.username}
            onSubmitEditing={() => password.current?.focus()}
            onBlur={handleBlur('username')}
          />
          {/* password */}
          <TextInput
            ref={password}
            secureTextEntry={true}
            returnKeyType="go"
            returnKeyLabel="Masuk"
            autoCompleteType="password"
            autoCapitalize="none"
            value={values.password}
            onChangeText={handleChange('password')}
            label="Password"
            error={errors.password}
            touched={touched.password}
            onSubmitEditing={handleSubmit}
            onBlur={handleBlur('password')}
            style={{
              marginBottom: spacing.m,
            }}
          />
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Masuk"
          />
        </Box>
      </Box>
    </Layout>
  );
};
