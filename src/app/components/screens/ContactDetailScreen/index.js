
import React, { useLayoutEffect } from 'react';
import { View, ScrollView, Text, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMergeState } from '../../../constants/functional';
import { provider_contact } from '../../../configuration/provider';
import { styles } from './style';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { useSelector } from 'react-redux';
import { Button } from '../../atoms/Button';
import { Header } from '../../atoms/Header';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Colors from '../../../constants/colors';

const ContactDetailScreen = ({ }) => {
  const { selectedContactData } = useSelector(reduxState => reduxState);
  const { firstName, lastName, age, photo, id } = selectedContactData

  const [state, setState] = useMergeState({
    isLoading: false,
    firstNameUser: firstName,
    lastNameUser: lastName,
    ageUser: age,
    photoUser: photo
  });
  const { isLoading, firstNameUser, lastNameUser, ageUser, photoUser } = state;
  const navigation = useNavigation();

  const _handlerOnPressSubmit = async () => {
    setState({ isLoading: true });

    const requestBody = {
      firstName: firstNameUser,
      lastName: lastNameUser,
      age: parseInt(ageUser, 10),
      photo: `${photoUser}`
    }

    try {
      let res;
      if (id) {
        res = await provider_contact.putContact(id, requestBody);
      } else {
        res = await provider_contact.postContact(requestBody);
      }
      var resStatus = res?.status || false;

      if (resStatus == 201) {
        setTimeout(() => {
          setState({
            isLoading: false,
          });

          Toast.show({
            type: 'success',
            text1: 'Succesfully submit contact.',
          });
          navigation?.pop()
        }, 500);
      }
    } catch (e) {
      setTimeout(() => {
        setState({
          isLoading: false,
        });

        Toast.show({
          type: 'error',
          text1: 'Failed submit contact.',
        });
      }, 500);
    }
  }

  const _handlerOnPressDelete = async () => {
    setState({ isLoading: true });

    try {
      const res = await provider_contact.deleteContact(id);
      var resStatus = res?.status || false;

      if (resStatus == 201) {
        setTimeout(() => {
          setState({
            isLoading: false,
          });

          Toast.show({
            type: 'success',
            text1: 'Succesfully deleted contact.',
          });

          navigation?.pop()
        }, 500);
      }
    } catch (e) {
      setTimeout(() => {
        setState({
          isLoading: false,
        });

        Toast.show({
          type: 'error',
          text1: 'Failed deleted contact.',
        });
      }, 500);
    }
  }

  const _renderScreen = () => {
    const initialitationData = [
      {
        title: 'First Name',
        value: firstNameUser,
        onchange: (text) => _handlerOnChangeFirstName(text)
      },
      {
        title: 'Last Name',
        value: lastNameUser,
        onchange: (text) => _handlerOnChangeLastName(text)
      },
      {
        title: 'Age',
        value: ageUser,
        onchange: (text) => _handlerOnChangeAge(text)
      },
      {
        title: 'Photo Url',
        value: photoUser,
        onchange: (text) => _handlerOnChangePhoto(text)
      },
    ]

    const _handlerOnChangeFirstName = (text) => {
      setState({ firstNameUser: text.trim() })
    }

    const _handlerOnChangeLastName = (text) => {
      setState({ lastNameUser: text.trim() })
    }

    const _handlerOnChangeAge = (text) => {
      setState({ ageUser: text.trim() })
    }

    const _handlerOnChangePhoto = (text) => {
      setState({ photoUser: text.trim() })
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        header: () => (
          <Header
            label={'Detail '}
          />
        ),
      });
    }, []);

    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.container}>
            <View style={styles.card}>
              {photo ? (
                <Image source={{ uri: photo }} style={styles.cardAvatar} />
              ) : null}

              {initialitationData?.map((item, index) => {
                const { title, value, onchange } = item || false;

                return (
                  <View key={index}>
                    <Text style={styles.cardTitle}>{title}</Text>

                    <TextInput
                      onChangeText={(text) => onchange(text)}
                      value={`${value}`}
                      style={styles.textInputBorder}
                    />

                    {index != initialitationData?.length - 1 ? (
                      <View style={styles.gap} />
                    ) : null}
                  </View>
                );
              })}

              <Button
                top={32}
                onPress={() => { _handlerOnPressSubmit() }}
                label={'Submit'}
              />

              {id ? (
                <Button
                  top={8}
                  onPress={() => { _handlerOnPressDelete() }}
                  background={Colors.error}
                  label={'Delete'}
                />
              ) : null}
            </View>
          </View>
        </ScrollView>

        {isLoading ? <LoadingIndicator /> : null}
      </>
    );
  };

  return _renderScreen();
};

export { ContactDetailScreen };
