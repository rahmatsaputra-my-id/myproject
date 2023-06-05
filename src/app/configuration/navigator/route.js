import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { ContactScreen } from '../../screens/ContactScreen';
import { LoginScreen } from '../../screens/LoginScreen';
import { store } from '../store';
import { Provider } from 'react-redux';
import { Colors as ColorsBar } from 'react-native/Libraries/NewAppScreen';
import Colors from '../../constants/colors';
import { STATUSBAR_HEIGHT } from '../../constants/functional';
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

export const Route = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? ColorsBar.darker : ColorsBar.lighter,
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: STATUSBAR_HEIGHT,
  },
});