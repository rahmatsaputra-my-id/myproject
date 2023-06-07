
import React, { useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMergeState } from '../../../constants/functional';
import { provider_contact } from '../../../configuration/provider';
import { styles } from './style';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { useSelector } from 'react-redux';
import { Button } from '../../atoms/Button';
import { Header } from '../../atoms/Header';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { InputText } from '../../atoms/TextInput';
import Colors from '../../../constants/colors';

const ContactDetailScreen = ({ }) => {
  const { selectedContactData } = useSelector(reduxState => reduxState);
  const { firstName, lastName, age, photo, id } = selectedContactData

  const [state, setState] = useMergeState({
    isLoading: false,
    firstNameUser: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    lastNameUser: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    ageUser: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    photoUser: {
      value: '',
      isValid: false,
      errorMessage: ''
    }
  });
  const { isLoading, firstNameUser, lastNameUser, ageUser, photoUser } = state;
  const isAllFieldValid = firstNameUser?.isValid && lastNameUser?.isValid && ageUser?.isValid && photoUser?.isValid
  const navigation = useNavigation();

  const initialitationData = [
    {
      title: 'First Name',
      value: firstNameUser?.value,
      errorMessage: firstNameUser?.errorMessage,
      onchange: (text) => _handlerOnChangeFirstName(text),
      keyboardType: 'default'
    },
    {
      title: 'Last Name',
      value: lastNameUser?.value,
      errorMessage: lastNameUser?.errorMessage,
      onchange: (text) => _handlerOnChangeLastName(text),
      keyboardType: 'default'
    },
    {
      title: 'Age',
      value: ageUser?.value,
      errorMessage: ageUser?.errorMessage,
      onchange: (text) => _handlerOnChangeAge(text),
      keyboardType: 'number-pad'
    },
    {
      title: 'Photo Url',
      value: photoUser?.value,
      errorMessage: photoUser?.errorMessage,
      onchange: (text) => _handlerOnChangePhoto(text),
      keyboardType: 'default'
    },
  ]


  useEffect(() => {
    if (firstName && lastName && age && photo) {
      _handlerOnChangeFirstName(firstName)
      _handlerOnChangeLastName(lastName)
      _handlerOnChangeAge(age)
      _handlerOnChangePhoto(photo)
    }
  }, [])

  const _handlerOnPressSubmit = async () => {
    setState({ isLoading: true });

    const requestBody = {
      firstName: firstNameUser?.value,
      lastName: lastNameUser?.value,
      age: parseInt(ageUser, 10),
      photo: `${photoUser?.value}`
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

  const _handlerOnChangeFirstName = (text) => {
    const isFirstNameLengthMin2 = text?.length > 2;
    const isAllConditionValid = isFirstNameLengthMin2;

    setState({
      firstNameUser: {
        value: text?.trim(),
        isValid: isAllConditionValid,
        errorMessage: !isFirstNameLengthMin2
          ? 'Minimal input 2 character.'
          : '',
      }
    })
  }

  const _handlerOnChangeLastName = (text) => {
    const isLastNameLengthMin2 = text?.length > 2;
    const isAllConditionValid = isLastNameLengthMin2;

    setState({
      lastNameUser: {
        value: text?.trim(),
        isValid: isAllConditionValid,
        errorMessage: !isLastNameLengthMin2
          ? 'Minimal input 2 character.'
          : '',
      }
    })
  }

  const _handlerOnChangeAge = (text) => {
    const inputText = `${text}`
    const isAgeLengthMin1 = inputText?.length > 0;
    const isAgeLengthMax2 = inputText?.length < 3;
    const isAllConditionValid = isAgeLengthMin1 && isAgeLengthMax2;

    setState({
      ageUser: {
        value: inputText?.trim(),
        isValid: isAllConditionValid,
        errorMessage: !isAgeLengthMin1
          ? 'Minimal input 1 character.'
          : !isAgeLengthMax2
            ? 'Maximal input 2 character.'
            : '',
      }
    })
  }

  const _handlerOnChangePhoto = (text) => {
    const isPhotoLengthMin1 = text?.length > 1;
    const isAllConditionValid = isPhotoLengthMin1;

    setState({
      photoUser: {
        value: text,
        isValid: isAllConditionValid,
        errorMessage: !isPhotoLengthMin1
          ? 'Minimal input 1 character.'
          : '',
      }
    })
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

  const _renderScreen = () => {
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
                const { title, value, onchange, errorMessage, keyboardType } = item || false;

                return (
                  <View key={index}>
                    <InputText
                      label={title}
                      value={value}
                      errorMessage={errorMessage}
                      keyboardType={keyboardType}
                      onChangeText={(text) => onchange(text)}
                    />

                    {index != initialitationData?.length - 1 ? (
                      <View style={styles.gap} />
                    ) : null}
                  </View>
                );
              })}

              <Button
                top={32}
                isDisabled={!isAllFieldValid}
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
