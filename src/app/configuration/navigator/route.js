import Colors from '../../constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactScreen } from '../../components/screens/ContactScreen';
import { LoginScreen } from '../../components/screens/LoginScreen';
import { store } from '../store';
import { Provider } from 'react-redux';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { STATUSBAR_HEIGHT } from '../../constants/functional';
import { Colors as ColorsBar } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ContactScreen"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
      />

    </Stack.Navigator>
  )
}

const ToastContainer = props => {
  return (
    <>
      {props?.isVisible ? (
        <View style={stylesProps(props?.type).toastContainer} >
          <Text style={styles(props.type).toastTitle}>
            {props.label}
          </Text>
        </View >
      ) : null}
    </>
  )
};

export const Route = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const barStyle = isDarkMode ? 'light-content' : 'dark-content'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? ColorsBar.darker : ColorsBar.lighter,
  };

  const toastConfig = {
    success: (props) => <ToastContainer {...props} />,
    error: (props) => <ToastContainer {...props} type="error" />,
    warning: (props) => <ToastContainer {...props} type="warning" />,
  };

  return (
    <SafeAreaView style={styles.styleProps}>
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
          <Toast
            config={toastConfig}
            position={'bottom'}
            visibilityTime={3000}
          />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  )
}

const stylesProps = (type) => StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: STATUSBAR_HEIGHT,
  },
  toastContainer: {
    position: 'absolute',
    zIndex: 999,
    bottom: -24,
    right: 16,
    left: 16,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: type == 'error' ? Colors.error : type == 'warning' ? Colors.warning : Colors.success,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toastTitle: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: type == 'warning' ? Colors.black : Colors.white,
  }
});

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: STATUSBAR_HEIGHT,
  },
});