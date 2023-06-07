
import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    justifyContent: 'space-between',
    backgroundColor: Colors.white
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 20,
    marginBottom: 16
  },
  headerTitle: {
    fontSize: 36,
    color: Colors.black,
    fontWeight: 'bold',
  },
  card: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row'
  },
  content: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  iconPlus: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cardIconAvatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  cardTitle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'normal',
    paddingHorizontal: 16,
    alignSelf: 'center'
  },
  cardLine: {
    height: 0.8,
    width: '100%',
    backgroundColor: Colors.black
  }
});
