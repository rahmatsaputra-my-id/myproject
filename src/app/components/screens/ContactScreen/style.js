
import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.white
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: '400',
  }
});
