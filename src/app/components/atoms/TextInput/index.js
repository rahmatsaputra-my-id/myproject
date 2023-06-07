import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Text, TextInput } from 'react-native';
import Colors from '../../../constants/colors';

const InputText = ({
  label,
  labelStyle,
  top = 0,
  bottom = 0,
  inputTextStyle,
  errorMessage,
  ...props
}) => {

  return (
    <View
      style={{
        marginTop: top,
        marginBottom: bottom,
        width: '100%',
      }}>

      {label && (
        <Text style={[styles.textInputLabel, labelStyle]}>
          {label}
        </Text>
      )}

      <TextInput
        style={[styles.textInputBorder, inputTextStyle]}
        {...props}
      />

      {errorMessage ? (
        <Text style={styles.helperText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  helperText: {
    marginTop: 4,
    color: Colors.error,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  textInputLabel: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    marginBottom: 4
  },
  textInputBorder: {
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    color: Colors.black
  }
});

export { InputText };
