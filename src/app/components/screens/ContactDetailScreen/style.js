
import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.white
  },
  headerTitle: {
    fontSize: 28,
    color: Colors.black,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    textAlign: 'center'
  },
  card: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,
    elevation: 2,
    backgroundColor: Colors.white
  },
  content: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center'
  },
  cardAvatar: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardDescription: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'normal',
  },
  cardLine: {
    height: 0.8,
    width: '100%',
    backgroundColor: Colors.black
  },
  gap: {
    height: 16
  },
});
