import React from 'react';
import { TextInput, View, Text, StyleSheet, Dimensions } from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;

/**
 * to be wrapped with redux-form Field component
 */
export default function FormTextInput(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <TextInput
        {...inputProps}
        style={styles.textInput}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: '#00f',
    textAlign: 'right',
    width: SCREEN_WIDTH * 0.5,
  },
});