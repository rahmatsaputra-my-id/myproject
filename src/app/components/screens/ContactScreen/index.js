
import React, { useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useMergeState } from '../../../constants/functional';
import { provider_contact } from '../../../configuration/provider';
import { styles } from './style';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { useDispatch } from 'react-redux';
import { REDUCER_KEY } from '../../../constants/key/reducer_key';
import { IMAGES } from '../../../assets/images';

const ContactScreen = ({ }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const setSelectedContactData = (data) =>
    dispatch({ type: REDUCER_KEY.SELECTED_CONTACT_DATA, selectedContactData: data });
  const [state, setState] = useMergeState({
    isLoading: false,
    allData: false
  });
  const { isLoading, allData } = state;
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      _handlerGetAllData();
    }
  }, [isFocused])

  const _handlerGetAllData = async () => {
    setState({ isLoading: true });

    try {
      const res = await provider_contact.getAllContact();
      var resData = res?.data || false;

      if (resData?.data) {
        setTimeout(() => {
          setState({
            isLoading: false,
            allData: resData?.data
          });
        }, 500);
      }
    } catch (e) {
      setTimeout(() => {
        setState({
          isLoading: false,
        });
      }, 500);
    }
  }

  const _handlerAddContact = () => {
    const item = {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      photo: ''
    }

    setSelectedContactData(item)
    navigation?.navigate('ContactDetailScreen')
  }

  const _handlerEditContact = (item) => {
    setSelectedContactData(item)
    navigation?.navigate('ContactDetailScreen')
  }

  const _renderScreen = () => {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{'Contact'}</Text>

            <TouchableOpacity onPress={() => { _handlerAddContact() }}>
              <Image source={IMAGES.icon_plus_black} style={styles.iconPlus} />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}>
            {allData && allData?.map((item, index) => {
              const { firstName, photo } = item || '';

              return (
                <TouchableOpacity key={index} onPress={() => {
                  _handlerEditContact(item)
                }} style={styles.card}>
                  <View style={styles.content}>
                    {photo ? (
                      <Image source={{ uri: photo }} style={styles.cardIconAvatar} />
                    ) : null}

                    <Text style={styles.cardTitle}>{firstName}</Text>
                  </View>

                  <View style={styles.cardLine} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {isLoading ? <LoadingIndicator /> : null}
      </>
    );
  };

  return _renderScreen();
};

export { ContactScreen };
