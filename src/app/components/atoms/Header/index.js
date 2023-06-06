import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../constants/colors';
import { styles } from './style';
import { IMAGES } from '../../../assets/images';
import { NavigationContext } from '@react-navigation/native';

const Header = ({
  label,
  styleLabel,
  iconLeft,
  styleIconLeft,
  onPressIconLeft,
  iconRight,
  styleIconRight,
  onPressIconRight,
  styleContainer,
  paddingHorizontal = 16,
  colorLabel = Colors.black,
  backgroundColor = Colors.white,
}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: paddingHorizontal,
        backgroundColor: backgroundColor,
      }}>
      <View style={[styles.container, styleContainer]}>
        <TouchableOpacity
          onPress={
            onPressIconLeft
              ? onPressIconLeft
              : () => {
                navigation.pop();
              }
          }>
          {iconLeft ? (
            iconLeft
          ) : (
            <Image source={IMAGES.icon_arrow_left_black} style={[styleIconLeft, styles.iconArrowLeft]} />
          )}
        </TouchableOpacity>

        {label ? (
          <View style={styles.labelContainer}>
            <Text style={[styleLabel, styles.label, { color: colorLabel }]}>
              {label}
            </Text>
          </View>
        ) : null}

        {iconRight && onPressIconRight ? (
          <TouchableOpacity style={styleIconRight} onPress={onPressIconRight}>
            {iconRight}
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export { Header };
