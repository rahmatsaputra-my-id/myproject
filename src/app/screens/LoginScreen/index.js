
import React, { useEffect } from 'react';
import { styles } from './style';
import { View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMergeState } from '../../constants/functional';

const LoginScreen = ({ }) => {
  const [state, setState] = useMergeState({
    isLoading: false,
    popUpData: false,
  });
  const { isLoading, popUpData } = state;
  const navigation = useNavigation();

  const _renderScreen = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>

        <View style={styles.container}>
          <Text style={styles.title}>{'Login Screen'}</Text>

        </View>
      </ScrollView>
    );
  };

  return _renderScreen();
};

export { LoginScreen };
