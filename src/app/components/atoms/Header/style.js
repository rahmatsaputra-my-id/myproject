
import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    zIndex: -1,
    paddingVertical: 10,
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 20,
    color: Colors.black,
  },
  icon: {
    height: 15,
    width: 15,
  },
  iconArrowLeft: {
    width: 18,
    height: 18,
    resizeMode: 'contain'
  }
});
