
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../constants/colors';

const Button = ({
  label,
  color = Colors.white,
  background = Colors.black,
  onPress,
  top = 0,
  bottom = 0,
  isDisabled = false,
  outline = false,
  style = {},
  fontSize = 16,
  borderColor = Colors.black,
  borderWidth = 0,
  styleText,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styleProps(
          isDisabled,
          top,
          bottom,
          background,
          color,
          outline,
          fontSize,
          borderColor,
          borderWidth,
        ).container,
        style,
      ]}>
      <Text
        style={[
          styleProps(
            isDisabled,
            top,
            bottom,
            background,
            color,
            outline,
            fontSize,
            borderColor,
            borderWidth,
          ).text,
          styleText,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styleProps = (
  isDisabled,
  top,
  bottom,
  background,
  color,
  outline,
  fontSize,
  borderColor,
  borderWidth,
) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 30,
      backgroundColor: isDisabled
        ? Colors.grey
        : outline
          ? Colors.white
          : background,
      borderColor: isDisabled
        ? 'transparent'
        : outline
          ? Colors.black
          : borderColor
            ? borderColor
            : 'transparent',
      marginTop: top,
      marginBottom: bottom,
      borderWidth: outline ? 1 : borderWidth ? borderWidth : 0,
      paddingVertical: 8,
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: fontSize,
      fontWeight: '600',
      fontFamily: 'Poppins-SemiBold',
      color: isDisabled
        ? Colors.white
        : outline
          ? Colors.black
          : color
            ? color
            : Colors.black,
    },
  });

export { Button };
