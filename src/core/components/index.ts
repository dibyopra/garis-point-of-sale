import {
  Dimensions,
  Animated,
  Keyboard,
  TextInput as RNTextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {OutlinedTextField} from 'react-native-material-textfield';

export {
  Dimensions,
  ScrollView,
  Keyboard,
  Animated,
  Icon,
  Formik,
  useFormik,
  Yup,
  RNTextInput,
  SafeAreaView,
  StyleSheet,
  KeyboardAwareScrollView,
  FastImage,
  OutlinedTextField,
  TouchableOpacity
};

export * from './button';
export * from './navigation/routes';
export {default as TextInput} from './text_input/text_input';
export * from './themes';
export * from './internet_connection/internet_connection';
export * from './rounded_icon/rounded_icon';
export * from './layout/app_layout';
export * from './header/header';
export * from './modal/modal';
export * from './modal/modal_info';
export * from './rect_button/rect_button';
export * from './search_date/search_date';
