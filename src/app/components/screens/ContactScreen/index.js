
import React, { useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMergeState } from '../../../constants/functional';
import { provider_contact } from '../../../configuration/provider';
import { styles } from './style';

const ContactScreen = ({ }) => {
  const [state, setState] = useMergeState({
    isLoading: false,
    popUpData: false,
  });
  const { isLoading, popUpData } = state;
  const navigation = useNavigation();

  useEffect(() => {
    _handlerGetData();
  }, [])

  const _handlerGetData = async () => {
    setState({ isLoading: true });

    try {
      const res = await provider_contact.getDetailContact(23);
      var resData = res?.data || false;

      if (resData?.data) {
        setState({
          isLoading: false,
        });
      }
    } catch (e) {
      setState({ isLoading: false });
    }
  }

  const _renderScreen = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>

        <View style={styles.container}>
          <Text style={styles.title}>{'List Contact'}</Text>
        </View>
      </ScrollView>
    );
  };

  return _renderScreen();
};

export { ContactScreen };
